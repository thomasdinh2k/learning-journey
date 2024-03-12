import { createSlice } from "@reduxjs/toolkit";


export const memberListReducer = createSlice({
	name: "memberList",
	initialState: [],
    reducers: {
        fetchDataIn (state, action) {
            return action.payload
        }
    }
});

export const { fetchDataIn } = memberListReducer.actions;

export default memberListReducer.reducer
