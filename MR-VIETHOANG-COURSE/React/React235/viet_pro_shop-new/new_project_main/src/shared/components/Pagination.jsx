const Pagination = () => {
	return (
		<div id="pagination">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href="#">
						Trang trước
					</a>
				</li>
				<li className="page-item active">
					<a className="page-link" href="#">
						1
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						2
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						3
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						Trang sau
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;
