import { useEffect, useState } from "react"

export default function DeleteConfirmation({
	onConfirm,
	onCancel,
}) {
	const TIMER = 3000

	const [remainingTime, setRemainingTime] = useState(TIMER)

	useEffect(() => {
		let intervalID = setInterval(() => {
			setRemainingTime(prevTime => prevTime - 10)
		}, 10)

		return () => clearInterval(intervalID)
	}, [])

	useEffect(() => {
		let timeoutID = setTimeout(() => {
			onConfirm()
		}, TIMER)

		return () => {
			clearTimeout(timeoutID)
			console.log("Timer cleared!")
		}
	}, [onConfirm])

	return (
		<div id="delete-confirmation">
			<h2>Are you sure?</h2>
			<p>Do you really want to remove this place?</p>
			<p>
				Automatic Deleting in{" "}
				<strong>{remainingTime / 1000}</strong> seconds
			</p>
			<div id="confirmation-actions">
				<button onClick={onCancel} className="button-text">
					No
				</button>
				<button onClick={onConfirm} className="button">
					Yes
				</button>
			</div>
			<progress value={remainingTime} max={TIMER} />
		</div>
	)
}
