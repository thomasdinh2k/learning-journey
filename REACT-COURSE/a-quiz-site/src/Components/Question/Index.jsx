import QuestionTimer from "./QuestionTimer"
import AnswerSet from "./AnswerSet"
import { useCallback, useState } from "react"
import DUMMY_QUESTION from "../../questions"

const Question = ({
	currentIndex,
	onSelectAnswer,

	Timer,
	remainingTime,
	setRemainingTime,
}) => {
	const [answer, setAnswer] = useState({
		selectedAnswer: "",
		isCorrect: null,
	})

	function handleSelectAnswer(answer) {
		setAnswer({
			selectedAnswer: answer,
			isCorrect: null,
		})

		console.log("A")

		setTimeout(() => {
			setAnswer(prevState => ({
				...prevState,
				isCorrect: DUMMY_QUESTION[currentIndex].answers[0] == answer,
			}))

			console.log("B")

			setTimeout(() => {
				console.log("C")

				onSelectAnswer(answer, currentIndex)
			}, 2000)
		}, 1000)
	}

	const handleSkipQuestion = useCallback(() => {
		handleSelectAnswer(currentIndex, "NO_ANS")
		setRemainingTime(Timer)
	}, [handleSelectAnswer])

	let answerStatus = ""

	if (answer.selectedAnswer && answer.isCorrect !== null) {
		answerStatus = answer.isCorrect ? "correct" : "wrong"
	} else if (answer.selectedAnswer) {
		answerStatus = "answered"
	}

	return (
		<div id="question">
			<QuestionTimer
				timeout={Timer}
				remainingTime={remainingTime}
				setRemainingTime={setRemainingTime}
				onTimeOut={handleSkipQuestion}
			/>

			<h2>{DUMMY_QUESTION[currentIndex].text}</h2>

			<AnswerSet
				userSelectAnswer={answer.selectedAnswer}
				currentAnswerSet={DUMMY_QUESTION[currentIndex].answers}
				onAnswer={handleSelectAnswer}
				answerStatus={answerStatus}
			/>
		</div>
	)
}

export default Question
