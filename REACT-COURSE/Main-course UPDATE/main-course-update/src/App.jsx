/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import { useState } from "react";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";
import Example from "./components/Example";

const App = () => {
	const [activeTab, setActiveTab] = useState();
	return (
		<div>
			<Header activeTab={activeTab} />
			<CoreConcept activeTab={activeTab} />
			<Example activeTab={activeTab} setActiveTab={setActiveTab} />
			<main></main>
		</div>
	);
};

export default App;
