import { useDispatch } from "react-redux";

const Buttons = () => {
	const dispatch = useDispatch();

	function handleDispatch(content) {
		if (content === "Start") {
			dispatch({
				type: "GET_START_CLOCK",
			});
		} else if (content == "Add5") {
			dispatch({
				type: "GET_ADD_5",
			});
		} else if (content == "Minus5") {
			dispatch({
				type: "GET_MINUS_5",
			});
		} else {
			dispatch({
				type: "GET_STOP_CLOCK",
			});
		}
	}

	return (
		<div className="modes">
			<button
				className="start mode get-started"
				onClick={() => handleDispatch("Start")}
			>
				Start
			</button>
			<button className="mode" onClick={() => handleDispatch("Add5")}>
				+ 5s
			</button>
			<button className="mode" onClick={() => handleDispatch("Minus5")}>
				- 5s
			</button>
			<button className="stop mode" onClick={() => handleDispatch("Stop")}>
				Reset
			</button>
		</div>
	);
};

export default Buttons;
