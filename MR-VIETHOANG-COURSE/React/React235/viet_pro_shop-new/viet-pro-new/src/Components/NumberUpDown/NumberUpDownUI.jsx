import Down from "./Down";
import Up from "./Up";

const NumberUpDownUI = () => {
	return (
		<>
			<div className="container">
				<div className="row justify-content-center">
					<Up/>
					<Down/>
				</div>
			</div>
		</>
	);
};

export default NumberUpDownUI;
