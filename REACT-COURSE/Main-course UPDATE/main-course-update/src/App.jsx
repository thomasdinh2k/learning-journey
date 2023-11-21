/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/Concept/CoreConcepts";
import TabButton from "./components/Tab/TabButton";
import { EXAMPLES } from "./data";
import Example from "./components/Tab/Example";

const App = () => {
	const [activeTab, setActiveTab] = useState();
	return (
		<div>
			<Header activeTab={activeTab} />

			<main>
				<CoreConcept activeTab={activeTab} setActiveTab={setActiveTab}/>
				<Example activeTab={activeTab} setActiveTab={setActiveTab} />
			</main>
		</div>
	);
};

export default App;
