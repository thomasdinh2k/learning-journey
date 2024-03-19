import { Card, List, ListItem } from "@material-tailwind/react";
import Button from "../../SharedComponents/Button";
import EnglishSpan from "../../SharedComponents/EnglishSpan";
import TodoForm from "./TodoForm";

const TodoList = (todoList) => {
	console.log(todoList);

	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				Việc cần làm <EnglishSpan>todo list</EnglishSpan>
			</h2>
			<TodoForm />
			
			
			{todoList.todoList.length == 0 && <p className="text-stone-800 my-4">Chưa có Todo cho Project này</p>}

			<ul className="p-4 mt-8 rounded-md bg-stone-100">
				{todoList.todoList.map( todo => (
					<li key={todo.id} className="flex justify-between my-4">
						<span>{todo.title}</span>
						<Button className="text-stone-700 hover:text-red-500">Xóa</Button>
					</li>
				))}
			</ul>

		</section>
	);
};

export default TodoList;
