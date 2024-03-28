import { useEffect, useState } from "react"


const ProgressBar = ({timer: TIMER}) => {
    
    const [remainingTime, setRemainingTime] = useState(TIMER)
    
    useEffect(() => {
		let intervalID = setInterval(() => {
			setRemainingTime(prevTime => prevTime - 10)
		}, 10)

		return () => clearInterval(intervalID)
	}, [])

	useEffect(() => {
		let timeoutID = setTimeout(() => {
			onConfirm()
		}, TIMER)

		return () => {
			clearTimeout(timeoutID)
			console.log("Timer cleared!")
		}
	}, [onConfirm])

    return(
        <progress value={remainingTime} max={TIMER} />
    );
}

export default ProgressBar;