import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";

function App() {
	const [gameTurns, setGameTurns] = useState([]);
	const [activePlayer, setActivePlayer] = useState("X");
	// @todo test bot
	function handleSelectSquare(rowIndex, colIndex) {
		setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
		setGameTurns((prevTurns) => {
			let currentPlayer = "X";

			if (prevTurns.length > 0 && prevTurns[0].player === "X") {
				currentPlayer = "O";
			}
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
		/**
		 * @todo: Đẩy updatedTurns ra Component Log
		 * @body: Đã sync được history có dạng
		{
		// 		"square": {
		// 			"row": 0,
		// 			"col": 1
		// 		},
		// 		"player": "O"
		// 	},

		 * 
		 */
		// Debug
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
			LOG
			<Log />
		</main>
	);
}

export default App;
