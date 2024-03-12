import { Link } from "react-router-dom";
import "../../public/home.css";
import { Helmet } from "react-helmet";
import ProductItem from "../../shared/components/product-item";
import { useEffect, useState } from "react";
import { getProducts, getImage } from "../../services/Api";

const Home = ({ title }) => {
	const [featuredProductList, setFeaturedProductList] = useState([]);
	const [latestProductList, setLatestProductList] = useState([]);

	useEffect(() => {
		getProducts({
			params: { limit: 3, name: "iPhone", "filter[is_featured]": true },
		}).then((data) => {
			setFeaturedProductList(data.data.data.docs);
		});

		getProducts({
			params: { limit: 6, name: "iPhone", "filter[is_stock]": true },
		}).then((data) => {
			setLatestProductList(data.data.data.docs);
		});
	}, []);

	return (
		<>
			<Helmet>
				<title> Home </title>
			</Helmet>
			{/*	Feature Product	*/}
			<div className="products">
				<h3>Sản phẩm nổi bật</h3>
				<div className="product-list card-deck">
					{featuredProductList.map((product) => {
						return (
							<ProductItem
								name={product.name}
								price={product.price}
								image={getImage(product.image)}
							/>
						);
					})}
				</div>
			</div>
			{/*	End Feature Product	*/}
			{/*	Latest Product	*/}
			<div className="products">
				<h3>Sản phẩm mới</h3>
				<div className="product-list card-deck">
					{latestProductList.map((product) => {
						return (
							<ProductItem
								name={product.name}
								price={product.price}
								image={getImage(product.image)}
							/>
						);
					})}
					
				</div>
				
			</div>
			{/*	End Latest Product	*/}
		</>
	);
};

export default Home;
