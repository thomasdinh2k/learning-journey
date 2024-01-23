const ListTodo = () => {
	return (
		<>
			<table id="list" className="table">
				<tbody>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>PHP Laravel</td>
						<td>
							<a href="#">delete</a>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>NodeJS</td>
						<td>
							<a href="#">delete</a>
						</td>
					</tr>
					<tr>
						<td>
							<input type="checkbox" />
						</td>
						<td>ReactJS</td>
						<td>
							<a href="#">delete</a>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default ListTodo;
