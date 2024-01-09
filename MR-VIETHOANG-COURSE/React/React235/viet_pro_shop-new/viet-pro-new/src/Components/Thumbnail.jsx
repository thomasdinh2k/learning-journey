const Thumbnail = ({ handleSwitchImg, imgIndex, imageArray }) => {
	return (
		<>
			
			<p id="slide-num">
				{imageArray.map((item, index) => {
					return (
						<a
							key={item}
							onClick={() => {
								handleSwitchImg(index);
							}}
						>
							<img
								className={
									index == imgIndex ? "active thumbnail" : "thumbnail"
								}
								src={item}
								alt=""
							/>
						</a>
					);
				})}
			</p>
		</>
	);
};

export default Thumbnail;
