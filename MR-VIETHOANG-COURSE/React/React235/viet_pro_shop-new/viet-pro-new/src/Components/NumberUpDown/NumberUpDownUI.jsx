import DownRed from "./DownRed";
import UpBlue from "./UpBlue";

const NumberUpDownUI = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<UpBlue />
					<DownRed />
				</div>
			</div>
		</>
	);
};

export default NumberUpDownUI;
