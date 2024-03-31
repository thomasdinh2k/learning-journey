import QuestionTimer from "./QuestionTimer"
import AnswerSet from "./AnswerSet"
import { useCallback } from "react"

const Question = ({
	questionTitle,
	Timer,
	remainingTime,
	setRemainingTime,
	handleSelectAnswer,
	currentQuestionIndex,
	playerAnswers,
	currentAnswerSet,
	answerStatus,
}) => {
	const handleSkipQuestion = useCallback(() => {
		handleSelectAnswer(currentQuestionIndex, "NO_ANS")
		setRemainingTime(Timer)
	}, [handleSelectAnswer])

	return (
		<div id="question">
			<QuestionTimer
				timeout={Timer}
				remainingTime={remainingTime}
				setRemainingTime={setRemainingTime}
				onTimeOut={handleSkipQuestion}
			/>

			<h2>{questionTitle}</h2>
			<AnswerSet
				userSelectAnswer={playerAnswers.at(-1)?.answer}
				currentAnswerSet={currentAnswerSet}
				playerAnswers={playerAnswers}
				onAnswer={handleSelectAnswer}
				answerStatus={answerStatus}
				currentQuestionIndex={currentQuestionIndex}
			/>
		</div>
	)
}

export default Question
