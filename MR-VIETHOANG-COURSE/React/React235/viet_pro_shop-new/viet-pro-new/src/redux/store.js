import { createStore } from "redux";

const initState = {
	num: 10,
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		default:
			return state; // Trả giá trị ban đầu
	}
};

const store = createStore(reducer);

export default store;
