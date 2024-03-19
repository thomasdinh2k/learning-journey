import { useEffect } from "react";
import { useState } from "react";
import { getProductComments } from "../../../../services/Api";
import { useParams } from "react-router-dom";
import convertTimeStamp from "../../../../shared/utils/index.js"

const CommentList = () => {
	const routeParam = useParams();
	const [productComment, setProductComment] = useState([]);

	var productId = routeParam.productId;

	useEffect(() => {
		getProductComments(productId, {
			params: {limit: 4, sort: { createdAt: -1 }}
		}).then((req) =>
			setProductComment(req.data.data.docs)
		);
	}, []);

	return (
		<div id="comments-list" className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				
			{productComment.map((comment) => (
					<div className="comment-item" key={comment._id}>
						<ul>
							<li>
								<b>{comment.name}</b>
							</li>
							<li>{comment.email}</li>
							<li>{convertTimeStamp(comment.createdAt)}</li>
							<li>
								<p>
									{comment.content}
								</p>
							</li>
						</ul>
					</div>
			))}

				
				
			</div>
		</div>
	);
};

export default CommentList;
