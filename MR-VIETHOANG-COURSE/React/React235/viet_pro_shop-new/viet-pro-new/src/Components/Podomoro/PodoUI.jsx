import { useState } from "react";
import "../../../public/css/podo_clock.css";
import Buttons from "./Buttons";
import Clock from "./Clock";


const PodoUI = () => {
    const [ isPlaying, setIsPlaying ] = useState(false);

    return (
		<div>
			<h1 className="main-heading">Pomodoro clock</h1>
			<h3>learn how to use UseEffect & Redux State</h3>
			
            <Clock isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>

			<Buttons isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
		</div>
	);
};

export default PodoUI;
