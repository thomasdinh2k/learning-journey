import { useEffect, useState, useCallback } from "react"

const QuestionTimer = ({ timeout, handleSelectAnswer, answerStatus }) => {
	const [remainingTime, setRemainingTime] = useState(timeout)

	const handleTimeOut = useCallback(() => {
		handleSelectAnswer("NO_ANS")
		setRemainingTime(timeout)
	}, [handleSelectAnswer])

	useEffect(() => {
		// console.log("SETTING TIME OUT")

		const timeOutID = setTimeout(() => {
			console.log("Trigger time out - new question")
			handleTimeOut()
		}, timeout)

		return () => clearTimeout(timeOutID)
	}, [timeout, handleTimeOut])

	useEffect(() => {
		// console.log("SETTING INTERVAL")
		const intervalID = setInterval(() => {
			// if (remainingTime <= 100) {
			//     setRemainingTime(timeout)
			// }

			setRemainingTime(prevState => prevState - 100)
		}, 100)

		return () => {
			clearInterval(intervalID)
		}
	}, [])

	// console.log("Current answer status", answerStatus)

	return (

		<progress
		id="question-time"
		max={timeout}
		value={ answerStatus == '' ? remainingTime : timeout }
		className={answerStatus}
		/>

	)
	
}

/*
 As an user pick an answer:
 - First: Highlight that selected answer

 + After a second
    - Display Green if it's correct
    - Display Red if incorrect

 - After two seconds
    - Next question is loaded
*/

export default QuestionTimer
