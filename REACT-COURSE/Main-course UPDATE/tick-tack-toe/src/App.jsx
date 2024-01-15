import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";

const turnDecider = (gameTurns) => {
	let currentPlayer = "X";
	
	// prevTurns[0] là turn gần đây nhất được đưa vào State, giờ mình lấy ra để decide turn
	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	} else {
		currentPlayer = "X";
	}

	return currentPlayer;
};

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	let activePlayer = turnDecider(gameTurns);
	
	function handleSelectSquare(rowIndex, colIndex) {
		setGameTurns((prevTurns) => {
			// let currentPlayer = "X";

			// if (prevTurns.length > 0 && prevTurns[0].player === "X") {
			// 	currentPlayer = "O";
			// }
			const currentPlayer = turnDecider(prevTurns);

			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];
			console.log("updatedTurns", updatedTurns);
			return updatedTurns;
		});

		// [
		// 	{
		// 		"square": {
		// 			"row": 0,
		// 			"col": 1
		// 		},
		// 		"player": "O"
		// 	},
		// 	{
		// 		"square": {
		// 			"row": 0,
		// 			"col": 0
		// 		},
		// 		"player": "X"
		// 	},
		// 	{
		// 		"square": {
		// 			"row": 1,
		// 			"col": 0
		// 		},
		// 		"player": "O"
		// 	},
		// 	{
		// 		"square": {
		// 			"row": 1,
		// 			"col": 1
		// 		},
		// 		"player": "X"
		// 	},
		// 	{
		// 		"square": {
		// 			"row": 0,
		// 			"col": 2
		// 		},
		// 		"player": "O"
		// 	},
		// 	{
		// 		"square": {
		// 			"row": 1,
		// 			"col": 2
		// 		},
		// 		"player": "X"
		// 	}
		// ]

		// Debug

		/**
		 * TODO: Đẩy updatedTurns ra Component Log
		 * Đã sync được history rồi, đẩy ra rồi xem
		 */
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						playerSymbol="X"
						isPlayerActive={activePlayer}
					/>
					<Player
						initialName="Player 2"
						playerSymbol="O"
						isPlayerActive={activePlayer}
					/>
				</ol>
				<GameBoard onSelectSquare={handleSelectSquare} gameTurns={gameTurns} />
			</div>
			<Log turns={gameTurns} />
		</main>
	);
}

export default App;
