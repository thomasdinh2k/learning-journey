import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const UserInput = () => {
	/**
	 * Thu thập giá trị của người dùng và đặt biến cho từng ô
	 *
	 * Sau đó nghiên cứu cách đưa vào hàm tính toán (được export ra từ ./util)
	 */

	let initial_value = {
		initialInvestment: 0,
		expectedReturn: 0,
		annualInvestment: 0,
		duration: 0,
	};

	const [valueObject, setValueObject] = useState(initial_value);

	function setValueHelper(value, valueType) {
		setValueObject((prevState) => {
			return {
				...prevState,
				[valueType]: value,
			};
		});
	}

	function inputHandler(event, type) {
		switch (type) {
			case "initial_investment":
				console.log("initial_investment", event.target.value);
				setValueHelper(event.target.value, "initialInvestment");

				break;
			case "annual_investment":
				console.log("initial_investment", event.target.value);

				setValueHelper(event.target.value, "annualInvestment");
				break;
			case "expected_return":
				console.log("expected_return", event.target.value);
				setValueHelper(event.target.value, "expectedReturn");
				break;
			case "duration":
				console.log("duration", event.target.value);
				setValueHelper(event.target.value, "duration");
				break;
			default:
				break;
		}
	}

	console.log("Check State Test", valueObject);
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>INITIAL INVESTMENT</label>
					<input
						type="number"
						onChange={(event) => inputHandler(event, "initial_investment")}
						required
					></input>
				</p>
				<p>
					<label>ANNUAL INVESTMENT</label>
					<input
						type="number"
						onChange={(event) => inputHandler(event, "annual_investment")}
						required
					></input>
				</p>
			</div>

			<div className="input-group">
				<p>
					<label>EXPECTED RETURN</label>
					<input
						type="number"
						onChange={(event) => inputHandler(event, "expected_return")}
						required
					></input>
				</p>
				<p>
					<label>DURATION</label>
					<input
						type="number"
						onChange={(event) => inputHandler(event, "duration")}
						required
					></input>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
