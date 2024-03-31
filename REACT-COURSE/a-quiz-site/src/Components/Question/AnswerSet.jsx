import { useRef } from "react"

const AnswerSet = ({
	currentAnswerSet,
	playerAnswers,
	onAnswer,
	answerStatus,
	userSelectAnswer,
    currentQuestionIndex
}) => {
	const randomAnswerSet = useRef()

	if (!randomAnswerSet.current) {
		randomAnswerSet.current = currentAnswerSet.sort(() => {
			0.5 - Math.random()
		})
	}

    

	// const randomAnswerSet = [...currentAnswerSet].sort(() => 0.5 - Math.random())

	return (
		<div>
			<ul id="answers">
				{randomAnswerSet.current.map((answer, aIndex) => {
					let btnClass = ""

					let isSelected = userSelectAnswer === answer

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
								onClick={() => onAnswer(currentQuestionIndex, answer)}
								className={btnClass}
							>
								{answer}
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default AnswerSet
