const InitStateRed = {
	num: 10,
};

const reducerRed = (state = InitStateRed, action) => {
	switch (action.type) {
		case "Value_increase":
			return { ...state, num: state.num++ };
		case "Value_decrease":
			return { ...state, num: state.num-- };
		case "Reset":
			return { ...state, num: 0 };
		default:
			return state;
	}
};

export default reducerRed;
