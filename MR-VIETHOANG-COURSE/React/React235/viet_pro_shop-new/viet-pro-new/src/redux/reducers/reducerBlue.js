const InitStateBlue = {
	num: 6,
	is_playing: false,
};

const reducerBlue = (state = InitStateBlue, action) => {
	switch (action.type) {
		case "Value_increase":
			return { ...state, num: state.num + 1 };

		case "Reset":
			return { ...state, num: 0 };

		case "Increment":
			return { ...state, num: state.num + 1 };

		case "Play":
			return { ...state, is_playing: true };

        case "Stop":
            return {...state, is_playing: false};
            
		default:
			return state;
	}
};

export default reducerBlue;
