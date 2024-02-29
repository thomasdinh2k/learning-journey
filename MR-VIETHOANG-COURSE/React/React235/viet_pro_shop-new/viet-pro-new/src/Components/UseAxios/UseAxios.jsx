import { useEffect, useState } from "react";
import axios from "axios";

const UseAxios = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const respond = await axios.get("https://reqres.in/api/users");
				setData(respond.data.data);
			} catch (error) {
				console.log("There was an error", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<h1 className="text-3xl font-bold underline">Data Feed</h1>
			{data.map((e) => (
				<>
					<img src={e.avatar}></img>
					<p key={e.id}>
						{e.first_name} ||| {e.email}
					</p>
				</>
			))}
		</>
	);
};
export default UseAxios;
