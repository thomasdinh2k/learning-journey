import { useEffect, useState } from "react"

export const useFetch = (fetchFunc, initialValue) => {
	// States for later use
	const [isFetching, setIsFetching] = useState(false)
	const [error, setError] = useState()
	const [data, setData] = useState(initialValue)

	useEffect(() => {
		const fetchData = async () => {
			setIsFetching(true)
			try {
				const data = await fetchFunc()

				setData(data)
			} catch (error) {
				setError({
					message: error.message || "Couldn't fetch data!",
				})
			}
			setIsFetching(false)
		}

		fetchData()
	}, [fetchFunc])

	// Return State for later use
	return {
		isFetching,
		error,
		data,

		setData
	}
}
