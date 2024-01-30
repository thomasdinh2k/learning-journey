import React, { useState } from "react";

import "../public/css/randomNumber.css";
import "../public/css/index.css";
import "../public/css/bootstrap.css";
import Home from "./Components/Multi-language/Home";
import translateText from "./Components/Multi-language/GoogleTranslate";
// import Slide from "./Components/Slide";
// import ProductSlide from "./Components/ProductSlide";
import CarArticle from "./Components/CarArticle/CarArticle";
import Todo from "./Components/Todo/Todo";
import RandomNumber from "./Components/RandomNumber/RandomNumber";
import PodoUI from "./Components/Podomoro/PodoUI";

import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<>
			<Provider store={store}>
				<PodoUI />
			</Provider>
		</>
	);
}

export default App;
