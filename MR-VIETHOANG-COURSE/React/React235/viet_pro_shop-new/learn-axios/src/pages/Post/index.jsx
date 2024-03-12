import { useState, useEffect } from "react";
import axios from "axios";
import { getPosts } from "../../services/Api";

const Post = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		
		getPosts()
			.then( data => setData(data.data))
		
	}, []);

	// console.log("[POST_DATA]", data);

	return (
		<table className="table table-dark table-hover">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{/* <tr>
					<td>1</td>
					<td>
						sunt aut facere repellat provident occaecati excepturi optio
						reprehenderit
					</td>
					<td>
						quia et suscipit\nsuscipit recusandae consequuntur expedita et
						cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
						autem sunt rem eveniet architecto
					</td>
				</tr> */}

				{data.map((data) => (
					<tr key={data.id}>
						<td>{data.id}</td>
						<td>
							{data.title}
						</td>
						<td>
                            {data.body}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Post;
