import "../../public/css/product-styling.css"

const ProductSlide = () => {
	return (
		<>
            <h1>Product Slide</h1>
			<div id="products">
				<div id="large">
					<img src="images/img-1.jpg" />
				</div>
				<div id="small">
					<img className="active" src="images/img-1.jpg" />
					<img src="images/img-2.jpg" />
					<img src="images/img-3.jpg" />
				</div>
			</div>
		</>
	);
};

export default ProductSlide;
