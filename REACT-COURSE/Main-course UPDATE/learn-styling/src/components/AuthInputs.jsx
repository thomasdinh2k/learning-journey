import { useState } from "react";

import CombinedInput from "./styledComponents/Input";
import Button from "./styledComponents/Button";

export default function AuthInputs() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredPassword, setEnteredPassword] = useState("");
	const [submitted, setSubmitted] = useState(false);

	function handleInputChange(identifier, value) {
		if (identifier === "email") {
			setEnteredEmail(value);
		} else {
			setEnteredPassword(value);
		}
	}

	function handleLogin() {
		console.log("Init Login...");
		setSubmitted(true);
	}

	const emailNotValid = submitted && !enteredEmail.includes("@");
	const passwordNotValid = submitted && enteredPassword.trim().length < 6;

	return (
		<div id="auth-inputs" className="w-full max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800 mx-auto">    
			<div className="flex flex-col gap-2 mb-6">
				<CombinedInput
					type="email"
					invalid={emailNotValid}
					onChange={(event) => handleInputChange("email", event.target.value)}
				/>

				<CombinedInput
					type="Password"
					invalid={passwordNotValid}
					onChange={(event) =>
						handleInputChange("password", event.target.value)
					}
				/>
			</div>
			<div className="flex justify-end gap-4">
				<Button
					type="button"
					className="text-amber-400 hover:text-amber-600"
					variant="text-button">
					Create a new account
				</Button>
				
				<Button onClick={handleLogin}>
					Sign In
				</Button>
			</div>
		</div>
	);
}
