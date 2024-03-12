import { Link } from "react-router-dom";
import ProductPrice from "./Product-price";

const ProductItem = ({ name, price, image }) => {
	return (
		<>
			
				<div className="product-item card text-center">
					<Link to="/ProductDetail">
						<img src={image} />
					</Link>
					<h4>
						<Link to="/ProductDetail">{name}</Link>
					</h4>
					<p>
						Giá Bán: <span><ProductPrice price={price}/></span>
					</p>
				</div>
			
		</>
	);
};

export default ProductItem;
