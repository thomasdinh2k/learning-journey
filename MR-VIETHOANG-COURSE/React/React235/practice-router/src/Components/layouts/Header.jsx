import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error404 from "../pages/Error404";
import NewsContent from "../pages/NewsContent";

const Header = () => {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12">
						<nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
							<ul className="navbar-nav">
								<Link className="nav-item" to="/">
									<a className="nav-link">Home</a>
								</Link>
								<Link className="nav-item" to="/about">
									<a className="nav-link">About</a>
								</Link>
								<Link className="nav-item" to="/contact">
									<a className="nav-link">Contact</a>
								</Link>
							</ul>
						</nav>
					</div>
				</div>
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/article" element={<NewsContent />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</>
	);
};

export default Header;
