import React, { useState } from "react";

import "../public/css/index.css";
import "../public/css/bootstrap.css";
import Home from "./Components/Multi-language/Home";

function App() {
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
			{/* Multi-language Exercise */}
			<Home />
		</>
	);
}

export default App;
