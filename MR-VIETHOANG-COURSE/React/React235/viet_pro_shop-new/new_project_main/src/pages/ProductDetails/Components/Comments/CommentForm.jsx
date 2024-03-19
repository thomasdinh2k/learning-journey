import { useState } from "react";
import { useRef } from "react";
import { createCommentProduct } from "../../../../services/Api";
import { useParams } from "react-router-dom";

const CommentForm = () => {
	const params = useParams();

	var productId = params.productId;

	const [commentData, setCommentData] = useState({})

	const handleSubmit = async (event) => {
		event.preventDefault();
		await createCommentProduct( productId, commentData);
		alert(`Comment Pushed`);

		setCommentData({})
	  };

	const handleInputChange = (event) => {
		const { name, value} = event.target


		setCommentData(prevState => ({...prevState, [name]: value}))		
		
	}



	return (
		<div id="comment" className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<h3>Bình luận sản phẩm</h3>
				<form method="post" onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Tên:</label>
						<input
							name="name"
							required
							type="text"
							className="form-control"
							
							value={commentData.name}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input
							name="email"
							type="email"
							className="form-control"
							id="pwd"

							value={commentData.email}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Nội dung:</label>
						<textarea
							name="content"
							required
							rows={8}
							className="form-control"

							value={commentData.content}
							onChange={handleInputChange}
						/>
					</div>
					<button
						type="submit"
						name="sbm"
						className="btn btn-primary">
						Gửi
					</button>
				</form>
			</div>
		</div>
	);
};

export default CommentForm;
