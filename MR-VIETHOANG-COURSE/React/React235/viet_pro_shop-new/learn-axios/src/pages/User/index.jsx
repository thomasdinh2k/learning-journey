import { useState, useEffect } from "react";
import axios from "axios";
import Http from "../../services/Http";
import { getUsers } from "../../services/Api";

const User = () => {
	const [data, setData] = useState([]);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const respond = await axios.get(
	// 				"https://jsonplaceholder.typicode.com/users"
	// 			);
	// 			setData(respond.data);
	// 		} catch (error) {
	// 			console.log("There was an error", error);
	// 		}
	// 	};

	// 	fetchData();
	// }, []);

	useEffect(() => {
		// const Http = axios.create({
		// 	baseURL: "https://jsonplaceholder.typicode.com/"
		// });

		getUsers().then((data) => setData(data.data));
		// getUsers({}).then(data => console.log(data))

		// Http.get("/users", {}).then(data => setData(data.data));
		// Http.get("/products", {}).then(data => setData(data.data));
	}, []);

	// console.log("USER_DATA", data);

	return (
		<table className="table table-dark table-hover">
			<thead>
				<tr>
					<th>Fullname</th>
					<th>Username</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr>
						<td>{item.name}</td> 
						<td>{item.username}</td>
						<td>{item.email}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default User;
