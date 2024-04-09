import Header from "./components/Header.jsx"
import Login from "./components/Login.jsx"
import Signup from "./components/Signup.jsx"
import LoginViaState from "./components/LoginViaState.jsx"

function App() {
	return (
		<>
			<Header />
			<main>
				<LoginViaState/>
			</main>
		</>
	)
}

export default App
