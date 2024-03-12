/* eslint-disable no-unused-vars */
import { createAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../../redux/reducers/reducerTodo";

const AddToDo = () => {
	const todoList = useSelector((store) => store.todoReducer);
	const dispatch = useDispatch();

	const [inputValue, setInputValue] = useState("");

	function handleInput(e) {
		const value = e.target.value;
		setInputValue(value);
	}

	function handleAddTodo() {
		if (inputValue != "") {
			dispatch(add_todo(inputValue));
			setInputValue("");
		}
	}
	return (
		<>
			<div id="add" className="text-center">
				<form className="form-inline">
					<div className="form-group mb-2">
						<input
							type="text"
							className="form-control mr-2"
							placeholder="Course name"
							onChange={(event) => handleInput(event)}
							value={inputValue}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary mb-2"
						onClick={handleAddTodo}>
						Add Course
					</button>
				</form>
			</div>
			{/* <div className="alert alert-success">Added successfully !</div>
			<div className="alert alert-danger">Deleted successfully !</div> */}
		</>
	);
};

export default AddToDo;
