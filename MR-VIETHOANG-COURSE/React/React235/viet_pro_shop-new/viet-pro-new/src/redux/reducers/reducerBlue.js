const InitStateBlue = {
	num: 0,
};

const reducerBlue = (state = InitStateBlue, action) => {
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

export default reducerBlue;
