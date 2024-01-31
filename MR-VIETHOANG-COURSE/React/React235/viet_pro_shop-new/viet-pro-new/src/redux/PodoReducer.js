const initialValue = {
	time_minute: 45,
	time_second: 0,
	is_playing: false,
};

const podoReducer = (state = initialValue, action) => {
	switch (action.type) {
		case "Play":
			return { ...state, is_playing: true };
		case "Stop":
			return { ...state, is_playing: false };
		case "Reset":
			return { ...state, is_playing: false, time_minute: 1, time_second: 5 };
		case "Add_5":
			return { ...state, time_minute: state.time_minute + 5 };
		case "Minus_5":
			return { ...state, time_minute: state.time_minute - 5 };

		case "Minus_to_0":
			return { ...state, time_minute: 0 };

		case "second_decrement":
			return { ...state, time_second: state.time_second - 1 };

		case "minute_decrement":
			return { ...state, time_minute: state.time_minute - 1 };

		case "reset_second":
			return { ...state, time_second: 59 };

		default:
			return state;
	}
};

export default podoReducer;
