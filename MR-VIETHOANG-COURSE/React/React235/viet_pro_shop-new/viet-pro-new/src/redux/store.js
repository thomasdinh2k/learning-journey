import { configureStore } from "@reduxjs/toolkit";
import upReducer from "./reducers/reducerBlue";
import downReducer from "./reducers/reducerRed";
import todoReducer from "./reducers/reducerTodo";

const store = configureStore({
	reducer: {
		upReducer,
		downReducer,
        todoReducer
	},
});

export default store;
