const SummaryQuestions = ({
	answerCSS,
	index,
	question,
	userAnswer,
	correct_answer,
}) => {
	return (
		<li>
			<h3>{index + 1}</h3>
			<p className="question">{question}</p>
			<p className={`user-answer ${answerCSS}`}>
				
				{userAnswer != "NO_ANS" ? userAnswer : "Không có câu trả lời"}
				
			</p>
			{answerCSS !== "correct" && <p>Đáp án: {correct_answer}</p>}
		</li>
	)
}

export default SummaryQuestions
