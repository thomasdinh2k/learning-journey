import "./App.css";
import "../public/style.css";
import Header from "./Components/Header";
import BetSection from "./Components/BetSection/BetSection";
import ResultSection from "./Components/ResultSection";

function App() {

	return (
		<>
      <div className="bg-image"></div>
			<main>
				<Header />

        <BetSection/>

        <ResultSection/>
			</main>
		</>
	);
}

export default App;
