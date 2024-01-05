import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
	const [gameTurns, setGameTurn] = useState([]);
	const [activePlayer, setActivePlayer] = useState('X');

	function handleSelectSquare() {
		setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? 'O' : 'X'));
		setGameTurn(prevTurn => {
			const updatedTurns = [...prevTurn]
		})
	}
	
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName="Player 1" playerSymbol="X" isPlayerActive={activePlayer} />
					<Player initialName="Player 2" playerSymbol="O" isPlayerActive={activePlayer} />
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer}/>
			</div>
			LOG
			<Log/>
		</main>
	);
}

export default App;
