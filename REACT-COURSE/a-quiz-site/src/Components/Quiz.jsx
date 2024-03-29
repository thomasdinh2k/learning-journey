import { useCallback, useState, useMemo } from "react"
import DUMMY_QUESTIONS from "../questions.js"
import trophyIcon from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx"

const Quiz = () => {
	const [playerAnswers, setPlayerAnswers] = useState([])

	let Timer = 7 * 1000

	// const [timeIsUp, setTimeIsUp] = useState(false)
	const [remainingTime, setRemainingTime] = useState(Timer)
	let currentQuestionIndex = playerAnswers.length

	const handleSelectAnswer = useCallback((current_question, answer) => {
		setPlayerAnswers(prev_ans => {
			return [...prev_ans, { id: current_question, answer }]
		})
	}, [])

	const quizIsCompleted = playerAnswers.length === DUMMY_QUESTIONS.length

	// useEffect(() => {
	// 	console.log("Start Counting for the question", currentQuestionIndex + 1)
	// 	const intervalID = setInterval(() => {
	// 		setRemainingTime(prevState => {
	// 			return prevState - 100
	// 		})
	// 	}, 100)

	// 	return () => {
	// 		clearInterval(intervalID)
	// 	}
	// }, [currentQuestionIndex])

	// useEffect(() => {
	// 	if (remainingTime <= 100) {
	// 		handleSelectAnswer(currentQuestionIndex, "skip")
	// 		console.log("Time is up! Adding a Skip in player answer", playerAnswers)
	// 		setRemainingTime(Timer)
	// 	}
	// }, [remainingTime, currentQuestionIndex])

	// if (quizIsCompleted) {
	// 	return (
	// 		<div id="summary">
	// 			<img src={trophyIcon} alt="trophy-icon" />
	// 			<h2>{quizIsCompleted ? "Quiz Completed!" : "Your time is up!"}</h2>
	// 		</div>
	// 	)
	// }
	const handleSkipQuestion = useCallback(() => {
		handleSelectAnswer(null)
		setRemainingTime(Timer)
	}, [handleSelectAnswer])

	const randomAnswerSet = useMemo(
		() =>
			[...DUMMY_QUESTIONS[currentQuestionIndex].answers].sort(
				() => 0.5 - Math.random()
			),
		[currentQuestionIndex]
	)

	// if (remainingTime === 0) {
	// }

	return (
		<div id="quiz">
			<h1> Câu hỏi số: {currentQuestionIndex + 1}</h1>
			<p>Time left: {remainingTime}</p>

			<div id="question">
				<QuestionTimer
					key={currentQuestionIndex}
					timeout={Timer}
					remainingTime={remainingTime}
					setRemainingTime={setRemainingTime}
					onTimeOut={handleSkipQuestion}
				/>
				<h2>{DUMMY_QUESTIONS[currentQuestionIndex].text}</h2>

				<ul id="answers">
					{randomAnswerSet.map((answer, aIndex) => (
						<li key={aIndex} className="answer">
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
