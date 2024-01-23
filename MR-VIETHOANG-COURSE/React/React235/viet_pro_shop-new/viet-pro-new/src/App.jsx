import React, { useState } from "react";

import "../public/css/index.css";
import "../public/css/bootstrap.css";
import Home from "./Components/Multi-language/Home";
import translateText from "./Components/Multi-language/GoogleTranslate";
// import Slide from "./Components/Slide";
// import ProductSlide from "./Components/ProductSlide";
import CarArticle from "./Components/CarArticle/CarArticle";
import Todo from "./Components/Todo/Todo";

function App() {
	const [inputText, setInputText] = useState("");
	const [targetLanguage, setTargetLanguage] = useState("en"); // Default: Spanish

	const [renderedTranslation, updateRenderedTranslation] = useState("");
	
	const handleTranslate = async () => {
		if (inputText) {
			const translatedText = await translateText(inputText, targetLanguage);
			// Do something with the translatedText, e.g., display it on the page.
			updateRenderedTranslation(translatedText);
		}
	};
	// const imageArray = [
	// 	"images/banner-1.jpg",
	// 	"images/banner-2.jpg",
	// 	"images/banner-3.jpg",
	// ];

	// // const [imageSrc, updateImageSrc] = React.useState("images/banner-1.jpg");

	// const [imgIndex, updateImgIndex] = useState(0);

	// const handleSwitchImg = (num) => {
	// 	updateImgIndex(num);
	// };

	return (
		<>
			<Todo/>
			<CarArticle/>
			<h1>Test Translation</h1>
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
			/>

			<select
				value={targetLanguage}
				onChange={(e) => setTargetLanguage(e.target.value)}
			>
				<option value="es">Spanish</option>
				<option value="fr">French</option>
				<option value="vi">Vietnamese</option>
				<option value="zh">Chinese</option>
			</select>
			<button onClick={handleTranslate}>Translate Now!</button>
			<p>Your Translation: <strong>{renderedTranslation}</strong></p>
			{/* Multi-language Exercise */}
			<Home />
		</>
	);
}

export default App;
