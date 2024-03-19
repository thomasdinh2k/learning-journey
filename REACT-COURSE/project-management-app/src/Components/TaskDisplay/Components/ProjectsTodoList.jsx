import EnglishSpan from "../../SharedComponents/EnglishSpan";
import TodoForm from "./TodoForm";

const TodoList = () => {
	return <section>
		<h2 className="text-2xl font-bold text-stone-700 mb-4">Việc cần làm <EnglishSpan>todo list</EnglishSpan></h2>
		<TodoForm/>
		<p className="text-stone-800 my-4">Chưa có Todo cho Project này</p>

		<ul>

		</ul>
	</section>;
};

export default TodoList;
