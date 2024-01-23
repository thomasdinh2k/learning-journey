import ListTodo from "./ListTodo";

const Todo = () => {
	return (
		<>
			<div>
				<div id="header">
					<p>ToDo List</p>
				</div>
				<div id="body">
					<div className="container">
						<h3>ToDo List</h3>
						<div id="main" className="row">
							<div className="col-lg-12 col-md-12 col-sm-12">
								<div id="add" className="text-center">
									<form className="form-inline">
										<div className="form-group mb-2">
											<input
												type="password"
												className="form-control mr-2"
												placeholder="Course name"
											/>
										</div>
										<button type="submit" className="btn btn-primary mb-2">
											Add Course
										</button>
									</form>
								</div>
								<div className="alert alert-success">Added successfully !</div>
								<div className="alert alert-danger">Deleted successfully !</div>
								<ListTodo/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Todo;
