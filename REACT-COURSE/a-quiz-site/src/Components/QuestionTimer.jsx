import { useEffect } from "react"

const QuestionTimer = ({
	timeout,
	onTimeOut,
	remainingTime,
	setRemainingTime,
}) => {
	useEffect(() => {
        console.log("SETTING TIME OUT");
		const timeOutID = setTimeout(() => {
			onTimeOut()
		}, timeout)

		return () => clearTimeout(timeOutID)
	}, [timeout, onTimeOut])

	useEffect(() => {
        console.log("SETTING INTERVAL");
		const intervalID = setInterval(() => {
            
            // if (remainingTime <= 100) {
            //     setRemainingTime(timeout)
            // }
            
            setRemainingTime( prevState => (prevState - 100))
        }, 100)

		return () => {
			clearInterval(intervalID)
		}
	}, [])

	return <progress id="question-time" max={timeout} value={remainingTime}/>
}

export default QuestionTimer
