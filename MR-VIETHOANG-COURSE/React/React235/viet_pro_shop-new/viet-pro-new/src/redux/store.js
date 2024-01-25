import { createStore } from "redux";

const initState = {
	num: 10,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
        case "GET_NUMBER":
            return {...state, num: Math.round(Math.random() * 10)}
        case "GET_RESET":
            return {...state, num: 0}
		default:
			return state; // Trả giá trị ban đầu
	}
};

const store = createStore(reducer);

export default store;
