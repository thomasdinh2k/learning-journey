import Thumbnail from "./Thumbnail";

const Slide = ({ imgIndex, updateImageSrc, handleSwitchImg, imageArray }) => {
	return (
		<>
			<div id="slide">
				<div id="slide-img">
					<img src={imageArray[imgIndex]} />
				</div>
				<p id="slide-num">
					<a
						className={imgIndex == 0 ? "text-active" : null}
						href="#"
						onClick={() => {
							handleSwitchImg(0);
						}}
					>
						1
					</a>
					<a
						className={imgIndex == 1 ? "text-active" : null}
						href="#"
						onClick={() => {
							handleSwitchImg(1);
						}}
					>
						2
					</a>
					<a
						className={imgIndex == 2 ? "text-active" : null}
						href="#"
						onClick={() => {
							handleSwitchImg(2);
						}}
					>
						3
					</a>
				</p>
				<Thumbnail handleSwitchImg={handleSwitchImg} imageArray={imageArray} imgIndex={imgIndex} />
			</div>
		</>
	);
};

export default Slide;
