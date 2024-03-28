import { useState } from "react"
import DUMMY_QUESTIONS from "../questions.js"
import trophyIcon from "../assets/quiz-complete.png"

const Quiz = () => {
	const [playerAnswers, setPlayerAnswers] = useState([])
	const currentQuestionIndex = playerAnswers.length

	function handleSelectAnswer(current_question, answer) {
		setPlayerAnswers(prev_ans => {
			return [...prev_ans, { id: current_question, answer }]
		})
	}

    const quizIsCompleted = playerAnswers.length === DUMMY_QUESTIONS.length

    const randomAnswerSet = [...DUMMY_QUESTIONS[currentQuestionIndex].answers].sort(() => 0.5 - Math.random())


	if (quizIsCompleted) {
		return (
			<div id="summary">
				<img src={trophyIcon} alt="trophy-icon" />
				<h2>Quiz Completed!</h2>
			</div>
		)
	}

	return (
		<div id="quiz">
			<h1> Câu hỏi số: {currentQuestionIndex + 1}</h1>

			<div id="question">
				<h2>{DUMMY_QUESTIONS[currentQuestionIndex].text}</h2>

				<ul id="answers">
					{randomAnswerSet.map(answer => (
						<li key={answer} className="answer">
							<button
								onClick={() => handleSelectAnswer(currentQuestionIndex, answer)}
							>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Quiz
