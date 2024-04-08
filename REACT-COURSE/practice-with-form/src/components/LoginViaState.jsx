import { useState } from "react"

export default function Login() {
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	})

	const handleSubmission = (identifier, event) => {
		setInputValue(prevState => ({
			...prevState,
			[identifier]: event.target.value,
		}))
	}

  console.log("inputValue", inputValue);

	return (
		<form onSubmit={handleSubmission}>
			<h2>Login</h2>

			<div className="control-row">
				<div className="control no-margin">
					<label htmlFor="email">Email</label>
					<input
						id="email"
						type="email"
						name="email"
						onChange={event => handleSubmission("email", event)}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						onChange={event => handleSubmission("password", event)}
					/>
				</div>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	)
}
