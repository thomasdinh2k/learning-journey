const UserInput = () => {
	/**
	 * TODO Thu thập giá trị của người dùng và đặt biến cho từng ô
	 *
	 * Sau đó nghiên cứu cách đưa vào hàm tính toán (được export ra từ ./util)
	 */

	let test_value = {
		initial_investment: 0,
		expected_return: 0,
		annual_investment: 0,
		duration: 0,
	};

	function inputHandler(event, type) {
		switch (type) {
			case "initial_investment":
				console.log("initial_investment", event.target.value);
				test_value = { ...test_value, initial_investment: event.target.value };
				break;
			case "annual_investment":
				console.log("initial_investment", event.target.value);
				test_value = { ...test_value, annual_investment: event.target.value };
				break;
			case "expected_return":
				console.log("expected_return", event.target.value);
				test_value = { ...test_value, expected_return: event.target.value };
				break;
			case "duration":
				console.log("duration", event.target.value);
				test_value = { ...test_value, duration: event.target.value };
				break;
			default:
				break;
		}
		console.log(test_value);
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
