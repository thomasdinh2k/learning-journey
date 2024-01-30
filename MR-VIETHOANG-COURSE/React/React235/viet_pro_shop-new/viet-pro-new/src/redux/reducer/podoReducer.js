const podoInitialState = {
	time_in_second: 120,
	is_running: false
};

const podoReducer = (state = podoInitialState, action) => {
	switch (action.type) {
		case "GET_START_CLOCK":
			return {...state, is_running: true}

		case "GET_STOP_CLOCK":
			return { ...state, time_in_second: 120, is_running: false };

		case "GET_ADD_5":
			return {...state, time_in_second: state.time_in_second + 5 }

		case "GET_MINUS_5":
			return {...state, time_in_second: state.time_in_second - 5}

		case "DECREMENT_TIMER":
			return {...state, time_in_second: state.time_in_second -1 }

		default:
			return state;
	}
};

export default podoReducer;
