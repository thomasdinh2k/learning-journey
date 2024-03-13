import { Link } from "react-router-dom";
import ProductPrice from "./Product-price";

const ProductItem = ({ name, price, image, productId }) => {
	return (
		<>
			
				<div className="product-item card text-center">
					<Link to={`/product-detail/${productId}`}>
						<img src={image} />
					</Link>
					<h4>
						<Link to={`/product-detail/${productId}`}>{name}</Link>
					</h4>
					<p>
						Giá Bán: <span><ProductPrice price={price}/></span>
					</p>
				</div>
			
		</>
	);
};

export default ProductItem;
