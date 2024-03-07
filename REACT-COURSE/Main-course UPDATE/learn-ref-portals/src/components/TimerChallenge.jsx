import React from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
	const dialog = React.useRef();
	const timer = React.useRef();
	const [timerExpired, setTimerExpired] = React.useState(false);

	const [timeLeft, setTimeLeft] = React.useState(targetTime * 1000);

	const timerIsActive = timeLeft > 0 && timeLeft < targetTime * 1000;

	if (timeLeft <= 0) {
		dialog.current.open();
		clearInterval(timer.current);
	}

	function handleStart() {
		timer.current = setInterval(() => {
			setTimeLeft((prevTimeLeft) => prevTimeLeft - 10); // Why?
		}, 10);
	}

	function handleStop() {
		dialog.current.open();
		clearInterval(timer.current);
	}
	
	function triggerReset() {
		setTimeLeft(targetTime * 1000);
	}
	return (
		<>
			<ResultModal
				targetTime={targetTime}
				ref={dialog}
				timeLeft={timeLeft}
				triggerReset={triggerReset}
			/>
			<section className="challenge">
				<h2>{title}</h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					{/* <p>{timeLeft}</p> */}
					<button
						onClick={timerIsActive ? handleStop : handleStart}
						ref={timer}>
						{" "}
						{timerIsActive ? "Stop" : "Start"} Challenge
					</button>
				</p>
				{timerIsActive && <p>Timer is running</p>}
			</section>
		</>
	);
};

export default TimerChallenge;
