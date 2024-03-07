import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef((props, ref) => {
	const dialog = useRef();

	const { timeLeft, triggerReset, targetTime } = props;

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	const secondLeft = (timeLeft / 1000).toFixed(2);
	const score = Math.round((1 - timeLeft / (targetTime * 1000) ) * 100)

	return (
		<dialog ref={dialog} className="result-modal" onClose={triggerReset}>
			{ timeLeft > 0 ? <h2>Reached {score}% - Score: {score * 10}</h2>: <h2>You're gay</h2>}
			
			<p>
				The target time was <strong>{targetTime} second</strong>
			</p>
			<p>
				You stopped the timer with <strong>{secondLeft} seconds left</strong>
			</p>
			<form method="dialog" onSubmit={triggerReset} >
				<button>Close</button>
			</form>
		</dialog>
	);
});

export default ResultModal;
