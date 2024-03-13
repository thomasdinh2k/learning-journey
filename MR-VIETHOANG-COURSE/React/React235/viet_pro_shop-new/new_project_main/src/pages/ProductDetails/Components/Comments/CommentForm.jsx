const CommentForm = () => {
	return (
		<div id="comment" className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<h3>Bình luận sản phẩm</h3>
				<form method="post">
					<div className="form-group">
						<label>Tên:</label>
						<input
							name="comm_name"
							required
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label>Email:</label>
						<input
							name="comm_mail"
							required
							type="email"
							className="form-control"
							id="pwd"
						/>
					</div>
					<div className="form-group">
						<label>Nội dung:</label>
						<textarea
							name="comm_details"
							required
							rows={8}
							className="form-control"
							defaultValue={""}
						/>
					</div>
					<button type="submit" name="sbm" className="btn btn-primary">
						Gửi
					</button>
				</form>
			</div>
		</div>
	);
};

export default CommentForm;
