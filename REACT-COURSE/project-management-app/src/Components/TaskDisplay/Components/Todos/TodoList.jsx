import Button from "../../../SharedComponents/Button";
import EnglishSpan from "../../../SharedComponents/EnglishSpan";
import TodoForm from "../TodoForm";

const TodoList = ({ todoList }) => {
	console.log(todoList);

	return (
		<section>
			<h2 className="text-2xl font-bold text-stone-700 mb-4">
				Việc cần làm <EnglishSpan>todo list</EnglishSpan>
			</h2>
			<TodoForm />

			{todoList.length == 0 && (
				<p className="text-stone-800 my-4">Chưa có Todo cho Project này</p>
			)}

			<ul className="p-4 mt-8 mr-8 rounded-md bg-stone-100">
				{todoList.map((todo) => (
					<li
						key={todo.id}
						className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
						<div className="flex items-center ps-3">
							<input
								id="vue-checkbox"
								type="checkbox"
								value=""
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
							/>
							<label
								for="vue-checkbox"
								class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
								{todo.title}
							</label>
							<Button className="text-stone-700 hover:text-red-500">Xóa</Button>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default TodoList;
