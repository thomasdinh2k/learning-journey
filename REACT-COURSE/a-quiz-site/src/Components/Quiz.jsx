import { useCallback, useState } from "react"
import DUMMY_QUESTIONS from "../questions.js"
import Question from "./Question/Index.jsx"
import Summary from "./Summary/Index.jsx"

const Quiz = () => {
	const [playerAnswers, setPlayerAnswers] = useState([])

	let currentQuestionIndex = playerAnswers.length

	const handleSelectAnswer = useCallback(answer => {
		// Move on to the next question
		setPlayerAnswers(prev_ans => {
			return [...prev_ans, answer]
		})
	}, [])

	const quizIsCompleted = playerAnswers.length === DUMMY_QUESTIONS.length

	if (quizIsCompleted) {
		return (
			<Summary answerSheet={playerAnswers}/>
		)
	}
	return (
		<div id="quiz">
			<h1> Câu hỏi số: {currentQuestionIndex + 1}</h1>

			<Question
				key={currentQuestionIndex}
				currentIndex={currentQuestionIndex}
				onSelectAnswer={handleSelectAnswer}
				currentQuestionIndex={currentQuestionIndex}
			/>
		</div>
	)
}

export default Quiz
