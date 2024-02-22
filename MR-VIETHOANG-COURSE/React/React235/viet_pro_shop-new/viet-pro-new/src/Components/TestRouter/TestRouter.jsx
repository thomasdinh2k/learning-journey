import About from "./Components/About";
import Contact from "./Components/Contact";
import Error404 from "./Components/Error404";
import Home from "./Components/Home";
import "./style.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const TestRouter = () => {
	return (
		<BrowserRouter>
			<header>
				<h1>Welcome to My Homepage</h1>
			</header>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
			<footer>
				<p>&copy; 2024 Simple Homepage. All rights reserved.</p>
			</footer>
		</BrowserRouter>
	);
};

export default TestRouter;
