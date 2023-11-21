import { CORE_CONCEPTS } from "../data";

import componentsIMG from "../assets/components.png";
import propsIMG from "../assets/config.png";
import jsxIMG from "../assets/jsx-ui.png";
import stateIMG from "../assets/state-mgmt.png";

const Header = ({ activeTab }) => {
	const reactDescription = [
		"Crucial",
		"Fundamental",
		"Important",
		"Core",
		"Vital",
		"Central",
	];

	console.log("HEADER", activeTab);

	const getImgSrc = (activeTab) => {
		switch (activeTab) {
			case "components":
				return componentsIMG;
			case "props":
				return propsIMG;
			case "jsx":
				return jsxIMG;
			case "state":
				return stateIMG;
			default:
				return null;
		}
	};

	return (
		<header>
			<div className="img-container">
				<img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
				{getImgSrc(activeTab) ? (
					<img className="side-img" src={getImgSrc(activeTab)}></img>
				) : (
					""
				)}
			</div>

			<h1>React Essentials</h1>
			<p>
				{
					reactDescription[
						Math.floor(Math.floor(Math.random() * reactDescription.length - 1))
					]
				}{" "}
				<strong>React</strong> concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
};

export default Header;
