import { useRef, useState, useCallback, useEffect } from "react"

import Places from "./components/Places.jsx"
import Modal from "./components/Modal.jsx"
import DeleteConfirmation from "./components/DeleteConfirmation.jsx"
import logoImg from "./assets/logo.png"
import AvailablePlaces from "./components/AvailablePlaces.jsx"
import { fetchUserPlaces, updateUserPlaces } from "./http.js"
import ShowError from "./components/ShowError.jsx"

function App() {
	const selectedPlace = useRef()

	const [userPlaces, setUserPlaces] = useState([])

	const [modalIsOpen, setModalIsOpen] = useState(false)

	const [ErrorUpdatingPlaces, setErrorUpdatingPlaces] = useState()

	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		const fetchedUserPlaces = async () => {
      setIsFetching(true)
			try {
				const data = await fetchUserPlaces()

				setUserPlaces(data)
			} catch (error) {
				setError({
					message: error.message || "Couldn't fetch the user places data!",
				})

        setIsFetching(false)
			}

			
		}

		fetchedUserPlaces()
	}, [])

	function handleStartRemovePlace(place) {
		setModalIsOpen(true)
		selectedPlace.current = place
	}

	function handleStopRemovePlace() {
		setModalIsOpen(false)
	}

	// MARK: Handle Select Place
	async function handleSelectPlace(selectedPlace) {
		setUserPlaces(prevPickedPlaces => {
			if (!prevPickedPlaces) {
				prevPickedPlaces = []
			}
			if (prevPickedPlaces.some(place => place.id === selectedPlace.id)) {
				return prevPickedPlaces
			}
			return [selectedPlace, ...prevPickedPlaces]
		})

		try {
			await updateUserPlaces([selectedPlace, ...userPlaces])
		} catch (error) {
			console.log(error)
			setErrorUpdatingPlaces({
				message: error.message || "Failed to update places | Unknown error.",
			})

			// Fall back to the previous State
			setUserPlaces(userPlaces)
		}
	}

	const handleRemovePlace = useCallback(
		async function handleRemovePlace() {
			setUserPlaces(prevPickedPlaces =>
				prevPickedPlaces.filter(place => place.id !== selectedPlace.current.id)
			)

			try {
				await updateUserPlaces(
					userPlaces.filter(place => place.id !== selectedPlace.current.id)
				)
			} catch (error) {
				setUserPlaces(userPlaces)

				setErrorUpdatingPlaces({
					message:
						`${error.name}: ${error.message}` ||
						"Failed to update places | Unknown error.",
				})
			}

			setModalIsOpen(false)
		},
		[userPlaces]
	)

	const handleError = () => {
		setErrorUpdatingPlaces(null)
	}
	return (
		<>
			<Modal open={ErrorUpdatingPlaces} onClose={handleError}>
				{ErrorUpdatingPlaces && (
					<ShowError
						title="Error while updating a Place"
						message={ErrorUpdatingPlaces.message}
						onConfirm={handleError}
					/>
				)}
			</Modal>

			<Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
				<DeleteConfirmation
					onCancel={handleStopRemovePlace}
					onConfirm={handleRemovePlace}
				/>
			</Modal>

			<header>
				<img src={logoImg} alt="Stylized globe" />
				<h1>PlacePicker</h1>
				<p>
					Create your personal collection of places you would like to visit or
					you have visited.
				</p>
			</header>
			<main>
				{error && <Error title="An Error Occurred!" message={error.message} />}
				{!error && (
					<Places
						title="I'd like to visit ..."
						fallbackText="Select the places you would like to visit below."
						isFetching={isFetching}
						fetchingText="Fetching your places..."
						places={userPlaces}
						onSelectPlace={handleStartRemovePlace}
					/>
				)}

				<AvailablePlaces onSelectPlace={handleSelectPlace} />
			</main>
		</>
	)
}

export default App
