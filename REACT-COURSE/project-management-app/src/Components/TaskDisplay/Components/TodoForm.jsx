import { useState } from "react";
import Button from "../../SharedComponents/Button";

const TodoForm = ({handleCreateTodo, selectedProjectId}) => {
	const [enteredTodo, setEnteredTodo] = useState(null);

	const handleInputChange = (event) => {
		setEnteredTodo(event.target.value);
	};

	const handleClick = () => {
		handleCreateTodo( selectedProjectId, enteredTodo)
		setEnteredTodo("");

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
