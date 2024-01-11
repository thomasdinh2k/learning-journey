import { useState } from "react";
import BodyVIE from "./BodyVIE";
import Header from "./Header";
import "./style.css";
import BodyENG from "./BodyEng";

const Home = () => {
	const [languageState, setLanguageState] = useState("vie");

	return (
		<>
			<caption>Current Language: {languageState} </caption>
			<div id="wrapper">
				<Header setLanguageState={setLanguageState} />
				{languageState == "vie" ? <BodyVIE/> : <BodyENG/>}
			</div>
		</>
	);
};

export default Home;
