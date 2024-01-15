import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";

const turnDecider = (gameTurns) => {
	let currentPlayer = "X";
	// console.log("gameTurns", gameTurns);


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
	
	function decideWinner(gameTurns) {
		// console.log("WinnerDATA", gameTurns);
		const xTurns = []
		const yTurns = []

		gameTurns.forEach( turns => {
			let player = turns.player
			let playerMove = turns.square
			
			if (player == "X") {
				xTurns.push(playerMove)
			} else {
				yTurns.push(playerMove)
			}
		});

		console.log("FINAL LOG PlayerX", xTurns);
		console.log("FINAL LOG PlayerY", yTurns);

		/**
		// TODO So sánh data này với winning combinations [main-react]
		// Chỉ cần so sánh được là tìm được ra điều kiện chiến thắng rồi
		// OK?
		 */
	}

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
			// console.log("updatedTurns", updatedTurns);
			
			decideWinner(updatedTurns)
			return updatedTurns;
		});

		
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
