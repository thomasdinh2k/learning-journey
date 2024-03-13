const ProductBody = ({ name, description }) => {
	
	const description_list =  description?.split("\n") || [];

	return (
		<div id="product-body" className="row">
			<div className="col-lg-12 col-md-12 col-sm-12">
				<h3>Đánh giá về {name}</h3>

				{description_list.map((sentence) => (
					<p>{sentence}</p>
				))}
			</div>
		</div>
	);
};

export default ProductBody;
