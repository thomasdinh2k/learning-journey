import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	minute: 45,
	second: 59,
}

const podoSlice = createSlice({
	name: 'podo',
	initialState,
	reducers: {
		minDecrement(state) {
			state.minute --;
		},
		secondDecrement(state) {
			state.second--;
		},
		setAmountMins(state, action) {
			state.minute = action.payload
		},
		setAmountSec(state,action) {
			state.second = action.payload
		},
		
	}
})

export const { minDecrement, secondDecrement, setAmountMins, setAmountSec} = podoSlice.actions;

export default podoSlice.reducer