import { useState } from "react";
import BodyVIE from "./BodyVIE";
import Header from "./Header";
import "./style.css";
import BodyENG from "./BodyEng";

const Home = () => {
	const [languageState, setLanguageState] = useState("vie");

	return (
		<>
			<h2>Current Language: {languageState} </h2>
			<div id="wrapper">
				<Header setLanguageState={setLanguageState} />
				{languageState == "vie" ? <BodyVIE/> : <BodyENG/>}
			</div>
		</>
	);
};

export default Home;
