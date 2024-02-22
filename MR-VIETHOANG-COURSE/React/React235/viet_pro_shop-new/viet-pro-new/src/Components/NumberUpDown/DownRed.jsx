import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { down, reset } from "../../redux/reducers/reducerRed";

const DownRed = () => {
	const dispatch = useDispatch();
	const [is_playing, setIs_playing] = useState(false)
	const numberRed = useSelector( (state) => state.downReducer)
	const [dataValue, setDataValue] = useState(numberRed)


	function handleModifyValue(event) {
		setDataValue(Number(event.target.value));
	}


	function handleButton(type) {
		switch (type) {
			case "up":
				break;
			case "down":
				dispatch(down());
				break;
			case "reset":
				dispatch(reset(dataValue));
				break;
			case "play":
				setIs_playing(!is_playing);
				break;
			default:
				break;
		}
	}

	// const numberRed = useSelector((store) => {
	// 	return store.reducerRed.num;
	// });

	

	useEffect(() => {
		if (is_playing) {
			const intervalId = setInterval(() => {
				dispatch( down() );
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
						placeholder={dataValue}
						onChange={(event) => handleModifyValue(event)}></input>
				</div>
			</div>
		</>
	);
};

export default DownRed;
