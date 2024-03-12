import { createSlice } from "@reduxjs/toolkit";

const initialState = 3000;

/* Tạo Reducer, không dùng luôn, mà dùng qua trung gian
=> Cần export ra để dùng lại */

export const downReducer = createSlice({
	// prefix-action keys (Gọi là -prefix vì sau đó mình cần nối vào các action key tạo thành Reducer hoàn chỉnh)
	name: "downReducer",
	initialState,
	reducers: {
		down: (state, action /* Giá trị thường dùng*/) => {
			/* Redux tool-kit cho phép sửa thẳng vào Object
			Bản chất của Object là immutable
			Nên giờ chỉ cần modify thẳng, không cần return
			*/

			return state -= 1;
		},

		reset: (state, action) => {
			/* Param thừa được truyền từ dispatch luôn luôn có tên là payload */
			return action.payload
		},
	},
});

export const {down, reset} = downReducer.actions

export default downReducer.reducer; /* .reducer ở đây là của Slice(), không phải là chọc từ Object  */
