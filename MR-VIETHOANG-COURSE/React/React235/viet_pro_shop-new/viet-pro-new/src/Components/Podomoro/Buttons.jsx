import { useDispatch, useSelector } from "react-redux";
import {
	setAmountMins,
	setAmountSec,
	
} from "../../redux/PodoReducer";

const Buttons = ( {isPlaying, setIsPlaying }) => {
	const dispatch = useDispatch();

	const { minute: time_minute, second: time_second } = useSelector((store) => store);

	const handleButton = (type) => {
		switch (type) {
			case "Play":
				setIsPlaying(true);

				if(time_minute == 0 && time_second == 0) {
					setAmountMins(45);
					setIsPlaying(true)
				}

				break;
			case "Stop":
				setIsPlaying(false);
				break;
			case "Reset":
				setIsPlaying(false);
				dispatch(setAmountMins(45));
				dispatch(setAmountSec(0));
				break;
			case "Add_5":
				dispatch(setAmountMins(time_minute + 5));
				break;
			case "Minus_5":
				if (time_minute > 5) {
					dispatch(setAmountMins(time_minute - 5));
				} else {
					setIsPlaying(false);
					dispatch(setAmountMins(0));
					dispatch(setAmountSec(0));
				}
				break;

			default:
				break;
		}
	};

	return (
		<div className="modes">
			<button
				className={`start mode get-started ${isPlaying && "active-play"}`}
				onClick={() => handleButton("Play")}>
				Start
			</button>
			<button
				className={`start mode get-started ${!isPlaying && "active-pause"}`}
				onClick={() => handleButton("Stop")}>
				Pause
			</button>
			<button className="" onClick={() => handleButton("Add_5")}>
				+ 5m
			</button>
			<button className="" onClick={() => handleButton("Minus_5")}>
				- 5m
			</button>
			<button className="stop mode" onClick={() => handleButton("Reset")}>
				Reset
			</button>
		</div>
	);
};

export default Buttons;
