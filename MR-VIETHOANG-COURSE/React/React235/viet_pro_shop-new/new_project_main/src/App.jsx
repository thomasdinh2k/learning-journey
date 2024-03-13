import { useState } from "react";
import "./App.css";
import Header from "./shared/components/Layout/Header";
import Footer from "./shared/components/Layout/Footer";
import Menu from "./shared/components/Layout/Menu/Menu";
import Slider from "./shared/components/Layout/Slider";
import Home from "./pages/Home";
import Sidebar from "./shared/components/Layout/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetails";
import Search from "./pages/Search";
import Success from "./pages/Success";
// import "../public/css/bootstrap.css"

function App() {
	return (
		<BrowserRouter>
			<div>
				{/*	Header	*/}
				<Header/>
				{/*	End Header	*/}
				{/*	Body	*/}
				<div id="body">
					<div className="container">
						<Menu/>
						<div className="row">
							<div id="main" className="col-lg-8 col-md-12 col-sm-12">
								{/*	Slider	*/}
								<Slider/>
								{/*	End Slider	*/}
								<Routes>
									
									<Route path="/" element={<Home title="Home"/>} />
									<Route path="/Cart" element={<Cart title="Cart"/>} />
									<Route path="/categories/:catName/:catId" element={<Category title="Category"/>} />
									<Route path="/*" element={<NotFound />} />
									<Route path="/product-detail/:productId" element={<ProductDetail title="Product Detail"/>} />
									<Route path="/Search" element={<Search title="Search"/>} />
									<Route path="/Success" element={<Success title="Success"/>} />

								</Routes>
							</div>
							<Sidebar/>
						</div>
					</div>
				</div>
				{/*	End Body	*/}
				<Footer/>
				{/*	End Footer	*/}
			</div>
		</BrowserRouter>
	);
}

export default App;
