import { configureStore } from "@reduxjs/toolkit";
import upReducer from "./reducers/reducerBlue";
import downReducer from "./reducers/reducerRed";
import todoReducer from "./reducers/reducerTodo";
import memberListReducer from "./reducers/reducerMemberList";

const store = configureStore({
	reducer: {
		upReducer,
		downReducer,
        todoReducer,
		memberListReducer
	},
});

export default store;
