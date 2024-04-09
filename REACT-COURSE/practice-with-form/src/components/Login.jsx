import { useRef, useState } from "react"

export default function Login() {
	const email = useRef()
	const password = useRef()

	const handleSubmission = (event) => {
    event.preventDefault();

    console.log(password.current.value);
  }

  //TODO ABCADASDASda
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
						// onChange={event => handleSubmission("email", event)}
            ref={email}
					/>
				</div>

				<div className="control no-margin">
					<label htmlFor="password">Password</label>
					<input
						id="password"
						type="password"
						name="password"
						// onChange={event => handleSubmission("password", event)}
            ref={password}
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
