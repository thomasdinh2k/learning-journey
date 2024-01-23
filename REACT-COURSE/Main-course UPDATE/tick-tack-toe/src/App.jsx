import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";
import GameOver from "./components/GameOverScreen";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

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
	const [playerInfo, setPlayerInfo] = useState( {'X': "Player 1", 'O': "Player 2"} )

	const handlePlayerNameChange = (symbol, newName) => {
		setPlayerInfo( prevState => {
			return { 
				...prevState,
					[symbol]: newName
			}
		})
	}

	// console.log("Current Player INFO", playerInfo);

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
	}

	// Convert "gameTurns" update to the GameBoard array
	let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])]; // Making a deep copy every time
	console.log("Current gameTurns", gameTurns);
	for (const turn of gameTurns) {
		// Object Destruct technique
		const { square, player } = turn;
		const { row, col } = square;
		// With destructured variable, now update the game board
		gameBoard[row][col] = player;
		// console.log("current Gameboard", gameBoard);
	}

	console.log("Current gameBoard is", gameBoard);

	let winner = null;
	
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol =
			gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol =
			gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol =
			gameBoard[combination[2].row][combination[2].column];

		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = playerInfo[firstSquareSymbol];
		}
	}

	

	const hasDraw = gameTurns.length === 9 && !winner

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

	const handleRematch = () => {
		gameBoard = initialGameBoard
		setGameTurns([])
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName="Player 1"
						playerSymbol="X"
						isPlayerActive={activePlayer}
						handlePlayerNameChange={handlePlayerNameChange}
					/>
					<Player
						initialName="Player 2"
						playerSymbol="O"
						isPlayerActive={activePlayer}
						handlePlayerNameChange={handlePlayerNameChange}
					/>
				</ol>
				{(winner || hasDraw) && <GameOver winner={winner} hasDraw={hasDraw} handleRematch={handleRematch}/>}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
			</div>
			<Log turns={gameTurns} playerInfo={playerInfo} />
		</main>
	);
}

export default App;
