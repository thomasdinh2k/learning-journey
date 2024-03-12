import { useEffect, useState } from "react";
import "../../../public/css/indexCar.css";
import Title from "./Title";

const CarArticle = () => {
	const [loadState, updateLoadState] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			updateLoadState(!loadState);
		}, 2000);
	}, []);

	// setTimeout(() => {
	// 	updateLoadState(!loadState);
	// }, 2000);

	return (
		<div id="main">
			<div className="content-item">
				<img className={loadState ? "filtered" : ''}
				
				src="../../public/images/banner-1.jpg" />
				<Title loadState={loadState}/>
				<p>
					{loadState
						? "Component is loading..."
						: `
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it
					to make a type specimen book. It has survived not only five centuries,
					but also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of
					Letraset sheets containing Lorem Ipsum passages, and more recently
					with desktop publishing software like Aldus PageMaker including
					versions of Lorem Ipsum.
					`}
				</p>
			</div>
		</div>
	);
};

export default CarArticle;
