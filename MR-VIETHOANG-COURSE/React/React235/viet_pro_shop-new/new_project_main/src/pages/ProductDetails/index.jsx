import "../../public/product.css";

import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductDescription } from "../../services/Api";
import ProductHead from "./Components/ProductHead";
import ProductBody from "./Components/ProductBody";
import CommentForm from "./Components/Comments/CommentForm";
import CommentList from "./Components/Comments/CommentsList";
import Pagination from "../../shared/components/Pagination";
const ProductDetail = () => {
	const routeParams = useParams();
	const [productDescription, setProductDescription] = useState([]);

	useEffect(() => {
		getProductDescription(routeParams.productId).then((req) =>
			setProductDescription(req.data.data)
		);
	}, []);

	
	return (
		<div>
			<Helmet>
				<title> Product Detail </title>
			</Helmet>
			<div>
				{/*	List Product	*/}
				<div id="product">
					
					<ProductHead 
						name={productDescription.name}
						warranty={productDescription.warranty}
						condition={productDescription.status}
						promotion={productDescription.promotion}
						price={productDescription.price}
						is_stock={productDescription.is_stock}
						thumbnail={productDescription.image}
					/>
					<ProductBody 
						name={productDescription.name}
						description={productDescription.details}
					/>

					{/*	Comment	*/}
					<CommentForm />
					{/*	End Comment	*/}
					{/*	Comments List	*/}
					<CommentList />
					{/*	End Comments List	*/}
				</div>
				{/*	End Product	*/}
				<Pagination />
			</div>
		</div>
	);
};

export default ProductDetail;
