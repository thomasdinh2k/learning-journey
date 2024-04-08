import { useEffect } from "react"
import Places from "./Places.jsx"
import { useState } from "react"
import ShowError from "./ShowError.jsx"
import { sortPlacesByDistance } from "../loc.js"
import { fetchAvailablePlaces } from "../http.js"
import { useFetch } from "../hooks/useFetch.js"

export default function AvailablePlaces({ onSelectPlace }) {

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		setIsFetching(true)
	// 		try {
	// 			const places = await fetchAvailablePlaces()

	// 			const sortedPlaces = sortPlacesByDistance(
	// 				places,
	// 				105.7636772771315,
	// 				21.048042322165895
	// 			)

	// 			setAvailablePlaces(sortedPlaces)
	// 		} catch (error) {
	// 			setError({ message: error.message || "Could not fetch the data" })
	// 		}
	// 		setIsFetching(false)
	// 	}

	// 	fetchData()
	// }, [])

	const {
		isFetching,
		error,
		data,
	} = useFetch(fetchAvailablePlaces, [])

	const availablePlaces = sortPlacesByDistance(data);

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
