import React, { useState } from "react";
import Title from "./Components/Title";
import Menu from "./Components/Menu";
import Slide from "./Components/Slide";
import "../public/css/index.css";
import "../public/css/bootstrap.css";
import Counter from "./Components/Counter";

function App() {
	const imageArray = [
		"images/banner-1.jpg",
		"images/banner-2.jpg",
		"images/banner-3.jpg",
	];

	// const [imageSrc, updateImageSrc] = React.useState("images/banner-1.jpg");

	const [imgIndex, updateImgIndex] = useState(0);

	const handleSwitchImg = (num) => {
		updateImgIndex(num);
	};

	return (
		<>
			<Title title="Tranh các thứ" />
			<Menu />
			<Counter />
			<Slide
				imgIndex={imgIndex}
				handleSwitchImg={handleSwitchImg}
				imageArray={imageArray}
			/>
		</>
	);
}

export default App;
