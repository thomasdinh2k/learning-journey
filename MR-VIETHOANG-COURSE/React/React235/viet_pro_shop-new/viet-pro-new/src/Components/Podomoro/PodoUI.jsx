import { useState } from "react";
import "../../../public/css/podo_clock.css";
import Buttons from "./Buttons";
import Clock from "./Clock";


const PodoUI = () => {
    

    return (
		<div>
			<h1 className="main-heading">Pomodoro clock</h1>
			<h3>by Thomas Dinh</h3>
			
            <Clock/>

			<Buttons/>
		</div>
	);
};

export default PodoUI;
