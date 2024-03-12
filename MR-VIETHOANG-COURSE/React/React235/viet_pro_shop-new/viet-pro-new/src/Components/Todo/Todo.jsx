import { useSelector } from "react-redux";
import AddToDo from "./AddTodo";
import ListTodo from "./ListTodo";

const Todo = () => {
	
	

	return (
		<>
			<div>
				<div className="container">
					<h3>ToDo List (Using Redux Toolkit)</h3>
					<div id="main" className="row">
						<div className="col-lg-12 col-md-12 col-sm-12">
							<AddToDo/>
							<ListTodo />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
