import { useEffect, useState } from "react";
import axios from "axios";
import { fetchDataIn } from "../../redux/reducers/reducerMemberList";
import { useSelector, useDispatch } from "react-redux";

const MemberList = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const respond = await axios.get("https://reqres.in/api/users");
				// setData(respond.data.data);
				dispatch(fetchDataIn(respond.data.data))

			} catch (error) {
				console.log("There was an error", error);
			}
		};

		fetchData();
	}, []);

	const data = useSelector( state => state.memberListReducer)
	console.log( "Data fetched", data );

	return (
		<>
			<h1 className="p-3 text-green-700">Data Feed</h1>

			<div className="p-4">
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
