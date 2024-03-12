import { useEffect, useState } from "react";
import axios from "axios";
import { fetchDataIn } from "../../redux/reducers/reducerMemberList";
import { useSelector, useDispatch } from "react-redux";

const MemberList = () => {

	const [data, setData] = useState([])
	
	useEffect(() => {
		const Http = axios.create({
			baseURL: "https://reqres.in/api/users"
		});

		// Add new user
		Http.post("/users", {
			"first_name": "Gay",
			"last_name": "Lord"
		}).then( data => console.log(data.data))

		Http.get("/users", {}).then(data => setData(data.data.data));

	}, []);


	return (
		<>
			<h1 className="p-3 text-green-700">Data Feed</h1>

			<div className="pl-4">
				<table className="table-auto w-full text-left whitespace-nowrap">
					<thead className="text-xs font-semibold uppercase text-green-800 bg-gray-50">
						<tr>
							<th>Full Name</th>
							<th>Username</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{data.map((item) => (
							<tr key={item.key}>
								<td>
									{item.first_name} {item.last_name}
								</td>
								<td>
									{item.first_name.toLowerCase()}
									{item.last_name.toLowerCase()}
									{item.id}
								</td>
								<td>{item.email}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};
export default MemberList;
