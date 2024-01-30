const InitStateRed = {
	num: 9,
	is_playing: false,
};

const reducerRed = (state = InitStateRed, action) => {
	switch (action.type) {
		case "Value_decrease":
			return { ...state, num: state.num - 1 };
		case "ResetR":
			return { ...state, num: 0 };

		case "PlayR":
			return { ...state, is_playing: true };

		case "StopR":
			return { ...state, is_playing: false };
		case "Decrement":
			return { ...state, num: state.num + 1 - 2 };
		default:
			return state;
	}
};

export default reducerRed;
