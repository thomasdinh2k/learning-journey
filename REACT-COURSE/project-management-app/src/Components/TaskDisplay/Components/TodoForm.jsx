import { useState } from "react";
import Button from "../../SharedComponents/Button";
import Modal from "../../SharedComponents/Modal";

const TodoForm = ({handleCreateTodo, selectedProjectId}) => {
	const [enteredTodo, setEnteredTodo] = useState('');

	const handleInputChange = (event) => {
		setEnteredTodo(event.target.value);
	};

	const handleClick = () => {
		
		if (enteredTodo.trim() != '') {
			handleCreateTodo( selectedProjectId, enteredTodo)
			setEnteredTodo("");
		} else {
			<Modal  buttonLabel="Okay">
			<h2 className="text-xl font-bold text-stone-700 my-4">
				Dữ liệu nhập vào thiếu, hoặc không hợp lệ
			</h2>
			<p className="text-stone-600 mb-4">
				Oops! Bạn nên check lại dữ liệu cần nhập
			</p>
			<p className="text-stone-600 mb-4">
				Chắc chắn rằng bạn không để xót trường dữ liệu nào
			</p>
		</Modal>
		}

	};

	return (
		<div className="flex items-center gap-4">
			<input
				type="text"
				name="text"
				className="w-80 px-2 py-1 rounded-sm bg-stone-200"
				onChange={handleInputChange}
				value={enteredTodo}
			/>
			<Button
				className="text-orange-800 hover:text-stone-950"
				onClick={handleClick}>
				Tạo mới
			</Button>
		</div>
	);
};

export default TodoForm;
