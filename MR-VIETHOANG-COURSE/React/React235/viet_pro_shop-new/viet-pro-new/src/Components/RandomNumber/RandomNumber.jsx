import { useState } from "react";

import Number from "./Number";

const RandomNumber = () => {
	
	const [number, setNumber] = useState(0);

	const handleGetNumber = (reset) => {
		if (reset === "Reset") {
			setNumber(0);
		} else {
			let randomNumber = Math.floor(Math.random() * 10 - 0 + 0);
			setNumber(randomNumber);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 text-center">
					<div id="main" className="random-number">
						<Number number={number} handleGetNumber={handleGetNumber}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RandomNumber;
