import { useCallback, useState, useMemo } from "react"
import DUMMY_QUESTIONS from "../questions.js"
import trophyIcon from "../assets/quiz-complete.png"
import QuestionTimer from "./QuestionTimer.jsx"

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

	const handleSkipQuestion = useCallback(() => {
		handleSelectAnswer(currentQuestionIndex, "NO_ANS")
		setRemainingTime(Timer)
	}, [handleSelectAnswer])

	const randomAnswerSet = useMemo(
		() =>
			[...DUMMY_QUESTIONS[currentQuestionIndex].answers].sort(
				() => 0.5 - Math.random()
			),
		[currentQuestionIndex]
	)

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
					{randomAnswerSet.map((answer, aIndex) => {
						let btnClass = ""

						let isSelected =
							playerAnswers[playerAnswers.length - 1]?.answer === answer

						if (isSelected) {
							btnClass = "selected"
						}

						if (
							isSelected &&
							(answerStatus == "correct" || answerStatus == "wrong")
						) {
							btnClass = answerStatus
						}
						return (
							<li key={aIndex} className="answer">
								<button
									onClick={() =>
										handleSelectAnswer(currentQuestionIndex, answer)
									}
									className={btnClass}
								>
									{answer}
								</button>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Quiz
