import Header from "./shared/Components/Layout/Header";
import Footer from "./shared/Components/Layout/Footer";
import Menu from "./shared/Components/Layout/Menu";
import Slider from "./shared/Components/Layout/Slider";
import Sidebar from "./shared/Components/Layout/Sidebar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Search from "./pages/Search";
import Success from "./pages/Success";

import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Injecting CSS */
import "./App.css";
import "./css/bootstrap.css";
import "./css/home.css";
import "./css/cart.css";
import "./css/category.css";
import "./css/product.css";
import "./css/search.css";
import "./css/success.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <div>
          <Header />
          {/*	Body	*/}
          <div id="body">
            <div className="container">
              <Menu />
              <div className="row">
                <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                  <Slider />

                  <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="category" element={<Category/>}/>
                    <Route path="product-detail" element={<ProductDetail/>}/>
                    <Route path="search" element={<Search/>}/>
                    <Route path="success" element={<Success />}/>
                    <Route path="*" element={<NotFound/>}/>
                  </Routes>
                </div>
                <Sidebar />
              </div>
            </div>
          </div>
          {/*	End Body	*/}

          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
