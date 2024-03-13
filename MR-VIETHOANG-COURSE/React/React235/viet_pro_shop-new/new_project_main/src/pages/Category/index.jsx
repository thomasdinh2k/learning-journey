import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../../public/category.css";
import { useEffect, useState } from "react";
import { getImage, getProductsByCategory } from "../../services/Api";
import ProductItem from "../../shared/components/product-item";

const Category = () => {
	const routeParams = useParams();

	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getProductsByCategory(routeParams.catId, { params: {} }).then((res) => {
			setProductList(res.data.data.docs);
		});
	}, [routeParams]);

	return (
		<div>
			<Helmet>
				<title> Danh mục {routeParams.catName.toUpperCase()} </title>
			</Helmet>

			<div>
				{/*	List Product	*/}
				<div className="products">
					<h3>
						Danh mục: {routeParams.catName.toUpperCase()} (hiện có xxx sản phẩm)
					</h3>

					<div className="product-list card-deck">
						{productList.map((product) => (
							<ProductItem
								productId={product._id}
								name={product.name}
								price={product.price}
								image={getImage(product.image)}
							/>
						))}
					</div>
				</div>
				{/*	End List Product	*/}
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
			</div>
		</div>
	);
};

export default Category;
