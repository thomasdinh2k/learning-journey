import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
	const dispatch = useDispatch();

	const {time_minute, is_playing} = useSelector((store) => store);


	const handleButton = (type) => {
		switch (type) {
			case "Play":
				dispatch({ type: "Play" });
				break;
			case "Stop":
				dispatch({ type: "Stop" });
				break;
			case "Reset":
				dispatch({ type: "Reset" });
				break;
			case "Add_5":
				dispatch({ type: "Add_5" });
				break;
			case "Minus_5":
				if (time_minute > 5) {
					dispatch({ type: "Minus_5" });
				} else {
					dispatch({ type: "Minus_to_0" });
				}
				break;

			default:
				break;
		}
	};

	return (
		<div className="modes">
			<button
				className={`start mode get-started ${is_playing && "active-play"}`}
				onClick={() => handleButton("Play")}
			>
				Start
			</button>
			<button
				className={`start mode get-started ${!is_playing && "active-pause"}`}
				onClick={() => handleButton("Stop")}
			>
				Pause
			</button>
			<button className="start mode" onClick={() => handleButton("Add_5")}>
				+ 5m
			</button>
			<button className="start mode" onClick={() => handleButton("Minus_5")}>
				- 5m
			</button>
			<button className="stop mode" onClick={() => handleButton("Reset")}>
				Reset
			</button>
		</div>
	);
};

export default Buttons;
