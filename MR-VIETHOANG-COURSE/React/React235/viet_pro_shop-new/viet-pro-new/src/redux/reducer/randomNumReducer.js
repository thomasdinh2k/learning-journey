const initState = {
	num: 10,
};

const randomReducer = (state = initState, action) => {
	switch (action.type) {
		case "GET_NUMBER":
			return { ...state, num: Math.round(Math.random() * 10) };
		case "GET_RESET":
			return { ...state, num: 0 };
		case "GET_LOVE":
			return { ...state, num: action.payload.data };
		default:
			return state; // Trả giá trị ban đầu
	}
};

export default randomReducer;