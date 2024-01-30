import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const UpBlue = () => {
	const dispatch = useDispatch();

	const { num: numberBlue, is_playing } = useSelector(
		(store) => store.reducerBlue
	);

	function handleButton(type) {
		switch (type) {
			case "up":
				dispatch({
					type: "Value_increase",
				});	
				break;
			case "down":
				dispatch({
					type: "Value_decrease",
				});
				break;
			case "reset":
				dispatch({
					type: "Reset",
				});
				break;
			case "play":
				if (is_playing) {
					dispatch({ type: "Stop" });
				} else {
					dispatch({ type: "Play" });
				}
				break;
			default:
				break;
		}
	}

	// useEffect(
	// 	setInterval(() => {
	// 		dispatch({ type: "Increment" });
	// 	}, 1000),
	// 	[]
	// );

	// useEffect(() => {
	// 	setInterval(() => {
	// 		dispatch({ type: "Increment" });
	// 	}, 1000);
	// }, []);

	useEffect(() => {
		if (is_playing) {
			const intervalID = setInterval(() => {
				dispatch({ type: "Increment" });
			}, 500);

			return () => {
				clearInterval(intervalID);
			};
		}
	}, [dispatch, is_playing]);

	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-8 col-8">
				<div className="timer bg-info" id="timer-up">
					<p>{numberBlue}</p>

					<button
						type="button"
						onClick={() => {
							handleButton("play");
						}}
						className={`btn ${is_playing ? "btn-warning" : "btn-light"}`}
					>
						{is_playing ? "Stop ■" : "Play ▲"}
					</button>

					<button
						type="button"
						className="btn btn-dark"
						onClick={() => {
							handleButton("up");
						}}
					>
						Up
					</button>

					<button
						type="button"
						className="btn btn-dark"
						onClick={() => {
							handleButton("reset");
						}}
					>
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default UpBlue;
