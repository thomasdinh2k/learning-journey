import { useDispatch, useSelector } from "react-redux";
import { remove_todo } from "../../redux/reducers/reducerTodo";

const ListTodo = () => {
	const todoList = useSelector((store) => store.todoReducer);

	const dispatch = useDispatch();

	function handleDeleteTodo(index) {
		console.log(`Deleted Index ${index}`);
		dispatch(remove_todo(index));
	}

	return (
		<>
			<table id="list" className="table">
				<tbody>
					{todoList.map((todo, index) => (
						<tr key={index}>
							<td>{todo}</td>
							<td>
								<p>Current Index {index} </p>
								<button onClick={() => handleDeleteTodo(index)}>
									delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTodo;
