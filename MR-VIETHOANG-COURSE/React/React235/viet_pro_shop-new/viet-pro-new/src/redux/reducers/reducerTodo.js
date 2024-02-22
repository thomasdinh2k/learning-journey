import { createSlice } from "@reduxjs/toolkit";

const todoReducer = createSlice({
	name: "todo",
	initialState: [],
	reducers: {
		add_todo: (state, action) => {
			state.push(action.payload);
		},
		remove_todo: (state, action) => {
			state.splice(action.payload, 1);
		},
	},
});

export const { add_todo, remove_todo } = todoReducer.actions;
export default todoReducer.reducer;
