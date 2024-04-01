import { useState } from "react"
import trophyIcon from "../../assets/quiz-complete.png"
import DUMMY_QUESTION from "../../questions"
import SummaryQuestions from "./SummaryQuestions"

const Summary = ({ answerSheet }) => {
	// template = ["NO_ANS", "Cung cấp một cơ sở dữ liệu tích hợp."]
	function calculatePercentage(value) {
		return `${Math.round((value / result.total_questions) * 100)}%`
	}

	let result = {
		total_questions: DUMMY_QUESTION.length,
		user_correct: answerSheet.filter(
			(answer, index) => answer === DUMMY_QUESTION[index].answers[0]
		).length,
		user_skip: answerSheet.filter(answer => answer === "NO_ANS").length,
		user_wrong: answerSheet.filter(
			(answer, index) =>
				answer != DUMMY_QUESTION[index].answers[0] && answer !== "NO_ANS"
		).length,
	}

	return (
		<div id="summary">
			<img src={trophyIcon} alt="trophy-icon" />
			<h2>Hoàn tất {result.total_questions} câu hỏi!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">
						{calculatePercentage(result.user_correct)}
					</span>
					<span className="text">trả lời đúng{`(${result.user_correct}/${result.total_questions})`}</span>
				</p>
				<p>
					<span className="number">
						{calculatePercentage(result.user_skip)}
					</span>
					<span className="text">đã bỏ qua{`(${result.user_skip})`}</span>
				</p>
				<p>
					<span className="number">
						{calculatePercentage(result.user_wrong)}
					</span>
					<span className="text">trả lời sai {`(${result.user_wrong}/${result.total_questions})`}</span>
				</p>
			</div>
			<ol>
				{answerSheet.map((answer, aIndex) => {
					let answerCSS = ""

					if (DUMMY_QUESTION[aIndex].answers[0] === answer) {
						answerCSS = "correct"
					} else if (answer === "NO_ANS") {
						answerCSS = "skip"
					} else {
						answerCSS = "wrong"
					}

					return (
						<SummaryQuestions
							key={aIndex}
							index={aIndex}
							question={DUMMY_QUESTION[aIndex].text}
							userAnswer={answer}
							correct_answer={DUMMY_QUESTION[aIndex].answers[0]}
							answerCSS={answerCSS}
						/>
					)
				})}
			</ol>
		</div>
	)
}

export default Summary
