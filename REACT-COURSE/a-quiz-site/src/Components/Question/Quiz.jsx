import { useCallback, useState, useMemo } from "react"
import DUMMY_QUESTIONS from "../../questions.js"
import trophyIcon from "../../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx"
import AnswerSet from "./AnswerSet.jsx"
import Question from "./Index.jsx"

const Quiz = () => {
	const [playerAnswers, setPlayerAnswers] = useState([])

	const [answerStatus, setAnswerStatus] = useState("")

	let Timer = 15 * 1000

	// const [timeIsUp, setTimeIsUp] = useState(false)
	const [remainingTime, setRemainingTime] = useState(Timer)
	let currentQuestionIndex =
		answerStatus == "" ? playerAnswers.length : playerAnswers.length - 1

	const handleSelectAnswer = useCallback(
		(current_question, answer) => {
			console.log("A")
			// TODO: Highlight with .selected for 1 second
			setAnswerStatus("user_selected")

			// Move on to the next question
			setPlayerAnswers(prev_ans => {
				return [...prev_ans, { id: current_question, answer }]
			})

			const timeOutID = setTimeout(() => {
				console.log("B")

				if (answer == DUMMY_QUESTIONS[currentQuestionIndex].answers[0]) {
					// Correct answer
					console.log("Correct Answer")
					setAnswerStatus("correct")
				} else {
					setAnswerStatus("wrong")
				}

				setTimeout(() => {
					console.log("C")
					setAnswerStatus("")
				}, 2000)
			}, 1000)

			// return () => {clearInterval(intervalID)}
		},
		[currentQuestionIndex]
	)

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
			<p>Time left: {remainingTime}</p>

			<Question
			key={currentQuestionIndex}
				questionTitle={DUMMY_QUESTIONS[currentQuestionIndex].text}
				Timer={Timer}
				remainingTime={remainingTime}
				setRemainingTime={setRemainingTime}
				handleSelectAnswer={handleSelectAnswer}
				currentQuestionIndex={currentQuestionIndex}
				playerAnswers={playerAnswers}
				answerStatus={answerStatus}
				currentAnswerSet = {DUMMY_QUESTIONS[currentQuestionIndex].answers}
			/>
			
		</div>
	)
}

export default Quiz
