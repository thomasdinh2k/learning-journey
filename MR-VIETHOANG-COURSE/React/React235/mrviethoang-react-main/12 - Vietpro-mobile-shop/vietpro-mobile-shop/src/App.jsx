import "./App.css";

import "../public/css/bootstrap.css";
import "../public/css/home.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Menu from "./shared/Menu";
import Slider from "./shared/Slider";
import Sidebar from "./shared/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/*	Body	*/}
        <div id="body">
          <div className="container">
            <Menu />
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />
              </div>
              <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                <Sidebar />
              </div>
              <ProductDetail/>
            </div>
          </div>
        </div>
        {/*	End Body	*/}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
