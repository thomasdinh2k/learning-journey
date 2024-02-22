import { BrowserRouter } from "react-router-dom";

import "./styles/bootstrap.css";
import "./styles/index.css";
import Header from "./Components/layouts/Header";
import Footer from "./Components/layouts/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
				
			<Footer />
		</BrowserRouter>
	);
}

export default App;
