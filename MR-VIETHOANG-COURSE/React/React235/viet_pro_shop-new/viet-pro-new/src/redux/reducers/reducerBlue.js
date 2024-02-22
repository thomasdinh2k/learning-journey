import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	num: 0,
	is_playing: false,
};

/* Tạo Reducer, không dùng luôn, mà dùng qua trung gian
=> Cần export ra để dùng lại */

export const upReducer = createSlice({
	// prefix-action keys (Gọi là -prefix vì sau đó mình cần nối vào các action key tạo thành Reducer hoàn chỉnh)
	name: "upReducer",
	initialState,
	reducers: {
		up: (state, action /* Giá trị thường dùng*/) => {
			/* Redux tool-kit cho phép sửa thẳng vào Object
			Bản chất của Object là immutable
			Nên giờ chỉ cần modify thẳng, không cần return
			*/

			state.num += 1;
		},

		reset: (state, action) => {
			/* Param thừa được truyền từ dispatch luôn luôn có tên là payload */
			state.num = action.payload;
		},
	},
});

export const { up, reset } = upReducer.actions;

export default upReducer.reducer; /* .reducer ở đây là của Slice(), không phải là chọc từ Object  */
