import { useState } from "react"

export default function Login() {
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	})

	const [didEdit, setDidEdit] = useState({ // State monitoring whether a box's focus is lost
		email: false,
		password: false,
		test: false
	})

	const handleInputBlur = (identifier) => {
		setDidEdit( prevEdit => ({
			...prevEdit,
			[identifier]: true
		}))
	};
	const handleSubmission = (identifier, event) => {
		setInputValue(prevState => ({
			...prevState,
			[identifier]: event.target.value,
		}))
	}

	const emailIsInvalid = !inputValue.email.includes("@") && inputValue.email.length > 4;

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
						// onBlur={}
					/>

					<div className="control-error">{emailIsInvalid && (<p>Valid Email will need a "@" sign</p>)}</div>
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
