import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DownRed = () => {
	const dispatch = useDispatch();

	function handleModifyValue(event) {
		let value = event.target.value;
		console.log(value);
		dispatch({ type: "Modify_value", payload: Number(value) });
	}

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
					type: "ResetR",
				});
				break;
			case "play":
				if (is_playing) {
					dispatch({ type: "StopR" });
				} else {
					dispatch({ type: "PlayR" });
				}
				break;
			default:
				break;
		}
	}

	// const numberRed = useSelector((store) => {
	// 	return store.reducerRed.num;
	// });

	const { num: numberRed, is_playing } = useSelector(
		(store) => store.downReducer
	);

	useEffect(() => {
		if (is_playing) {
			const intervalId = setInterval(() => {
				dispatch({ type: "Decrement" });
			}, 500);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, [is_playing, dispatch]);

	return (
		<>
			<div className="col-lg-3 col-md-3 col-sm-8 col-8">
				<div className="timer bg-danger" id="timer-down">
					<p>{numberRed}</p>

					<button
						type="button"
						className={`btn btn-${is_playing ? "warning" : "light"}`}
						onClick={() => {
							handleButton("play");
						}}>
						{is_playing ? "Stop ■" : "Play ▼"}
					</button>

					<button
						type="button"
						className="btn btn-dark"
						onClick={() => {
							handleButton("down");
						}}>
						Down
					</button>
					<button
						type="button"
						className="btn btn-dark"
						onClick={() => {
							handleButton("reset");
						}}>
						Reset
					</button>
					<input
						type="number"
						placeholder="0"
						onChange={(event) => handleModifyValue(event)}></input>
				</div>
			</div>
		</>
	);
};

export default DownRed;
