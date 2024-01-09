import React from "react";

const Slide = () => {
	
    const [imageSrc, updateImageSrc] = React.useState("images/banner-1.jpg")
    
    const handleSwitchImg = num => {
        updateImageSrc(`images/banner-${num}.jpg`)
    }

    return (
		<>
			<div id="slide">
				<div id="slide-img">
					<img src={imageSrc} />
				</div>
				<p id="slide-num">
					<a href="#" onClick={ () => {handleSwitchImg(1)} }>1</a>
					<a href="#" onClick={ () => {handleSwitchImg(2)} }>2</a>
					<a href="#" onClick={ () => {handleSwitchImg(3)} }>3</a>
				</p>
			</div>
		</>
	);
};

export default Slide;
