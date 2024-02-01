import { useState } from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const UserInput = ( { annualData, setAnnualData, setIsValid }) => {
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
			const updateValueObject = {
				...prevState,
				[valueType]: Number(value),
			};

			// let newAnnualData = calculateInvestmentResults({
			// 	initialInvestment: 10000,
			// 	annualInvestment: 300,
			// 	expectedReturn: 5.5,
			// 	duration: 12,
			// });
			let newAnnualData = calculateInvestmentResults({
				initialInvestment: updateValueObject.initialInvestment,
				annualInvestment: updateValueObject.annualInvestment,
				expectedReturn: updateValueObject.expectedReturn,
				duration: updateValueObject.duration,
			});

			// // Adding more information
			// newAnnualData = {
			// 	...newAnnualData,
			// 	initialInvestment: updateValueObject.initialInvestment
			// }

			setAnnualData(newAnnualData);
			
			
			return updateValueObject;
		});
	}

	function inputHandler(event, type) {
		let value = event.target.value;
		switch (type) {
			case "initial_investment":
				setValueHelper(value, "initialInvestment");
				break;
			case "annual_investment":
				setValueHelper(value, "annualInvestment");
				break;
			case "expected_return":
				setValueHelper(value, "expectedReturn");
				break;
			case "duration":
				if (value > 0 && value < 50) {
					setValueHelper(value, "duration");
				} else {
					setIsValid("Duration must be positive and lower than 50")
				}
				break;
			default:
				break;
		}
	}

	
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
						max="5"
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
