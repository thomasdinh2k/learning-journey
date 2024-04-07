import { useEffect } from "react"
import Places from "./Places.jsx"
import { useState } from "react"
import ShowError from "./ShowError.jsx"
import { sortPlacesByDistance } from "../loc.js"
import { fetchAvailablePlaces } from "../http.js"

export default function AvailablePlaces({ onSelectPlace }) {
	const [availablePlaces, setAvailablePlaces] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		const fetchData = async () => {
			setIsFetching(true)
			try {
				const places = await fetchAvailablePlaces()

				// console.log("places", places)

				// navigator.geolocation.getCurrentPosition(position => {
				// 	console.log(position)

				// 	// const position = {
        //   // coords: GeolocationCoordinates
				// 	// accuracy: 35
				// 	// altitude: 0
				// 	// altitudeAccuracy: null
				// 	// heading: null
				// 	// latitude: 21.048042322165895
				// 	// longitude: 105.7636772771315
				// 	// speed: null}

				// 	const sortedPlaces = sortPlacesByDistance(
				// 		places,
				// 		position.coords.latitude,
				// 		position.coords.longitude,
				// 		setIsFetching(false)
				// 	)

        // setAvailablePlaces(sortedPlaces)
				// })
        
        const sortedPlaces = sortPlacesByDistance(
          places,
          105.7636772771315,
          21.048042322165895
        )
        
        setAvailablePlaces(sortedPlaces)

			} catch (error) {
				setError({ message: error.message || "Could not fetch the data" })
				setIsFetching(false)
			}
		}

		fetchData()
	}, [])

	if (error) {
		return <ShowError title="An Error occurred!" message={error.message} />
	}

	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isFetching={isFetching}
			fetchingText="Please wait while the data's being fetched..."
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	)
}
