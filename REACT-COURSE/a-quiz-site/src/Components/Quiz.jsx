import { useCallback, useState, useMemo } from "react"
import DUMMY_QUESTIONS from "../questions.js"
import trophyIcon from "../assets/quiz-complete.png"
import QuestionTimer from "./Question/QuestionTimer.jsx"
import AnswerSet from "./Question/AnswerSet.jsx"
import Question from "./Question/Index.jsx"

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
			<div id="summary">
				<img src={trophyIcon} alt="trophy-icon" />
				<h2>{quizIsCompleted ? "Quiz Completed!" : "Your time is up!"}</h2>
			</div>
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
