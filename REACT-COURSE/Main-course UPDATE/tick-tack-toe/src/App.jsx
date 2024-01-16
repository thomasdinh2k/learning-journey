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
		const xTurns = [];
		const yTurns = [];

		gameTurns.forEach((turns) => {
			let player = turns.player;
			let playerMove = turns.square;

			if (player == "X") {
				xTurns.push(playerMove);
			} else {
				yTurns.push(playerMove);
			}
		});

		console.log("FINAL LOG PlayerX", xTurns);
		console.log("FINAL LOG PlayerY", yTurns);

		/**
		 TODO: So sánh data này với winning combinations [main-react]
		 Chỉ cần so sánh được là tìm được ra điều kiện chiến thắng rồi
		 OK??
		*/

		const testArray = [
			{
				row: 0,
				col: 2,
			},
			{
				row: 0,
				col: 1,
			},
			{
				row: 0,
				col: 0,
			},
		];

		// [
		// 	{
		// 		"row": 0,
		// 		"column": 2
		// 	},
		// 	{
		// 		"row": 1,
		// 		"column": 1
		// 	},
		// 	{
		// 		"row": 2,
		// 		"column": 0
		// 	}
		// ]

		function findCorrespondingArray(testElement, winningElement) {
			return (
				testElement.col === winningElement.column &&
				testElement.row === winningElement.row
			);
		}

		WINNING_COMBINATIONS.forEach((winningCombination) => {
			testArray.forEach((testElement) => {
				winningCombination.forEach((winningElement) => {
					if (findCorrespondingArray(testElement, winningElement)) {
						console.log("Found a match!");
					}
				});
			});
		});

		// console.log(WINNING_COMBINATIONS.find( comb => {
		// 	return testArray[0].row === comb.row  && testArray[0].col === comb.column
		// }));

		const compareArray = [
			{ row: 0, column: 0 },
			{ row: 0, column: 1 },
			{ row: 0, column: 2 },
		];

		// if (testArray === compareArray) {
		// 	console.log("Yes it's correct");

		// } else {
		// 	console.log("No it's not");
		// }

		// WINNING_COMBINATIONS.forEach( comb => {
		// 	if (comb === testArray) {
		// 		console.log("Found a match", testArray);
		// 	}
		// 	console.log("Found nothing from Winning_combinations");
		// })
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

			decideWinner(updatedTurns);
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
