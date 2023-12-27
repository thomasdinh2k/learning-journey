import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = () => {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);
	const [playerTurn, setPlayerTurn] = useState("X");

	const switchTurn = () => {
		if (playerTurn === "X") {
			setPlayerTurn("O");
		} else {
			setPlayerTurn("X");
		}
	};

	const decideWinner = () => {
		// console.log("Deciding winner");
		// console.log(gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]);

		// Winning Condition, diagonal

		// switch (gameBoard) {
		//     case gameBoard[0][0] === gameBoard [1][1] && gameBoard[0][0] === gameBoard[2][2]:
		//         console.log("Found winner diagonal");
		//     break;
		// }

		gameBoard.forEach((gameRow) => {
			// Winning Condition, horizontal
			if (
				gameRow[0] === gameRow[2] &&
				gameRow[0] === gameRow[1] &&
				gameRow[0] !== null
			) {
				console.log(`Found Winner, which is ${gameRow[0]}`);
				console.log(gameBoard);
				console.log(gameRow);
				return "X";
			}
		});
	};

	const handleSelectSquare = (rowIndex, colIndex) => {
		console.log(`Row now: ${rowIndex}`);
		console.log(`Col now: ${colIndex}`);

		console.log(gameBoard);

		const updatedGameBoard = [...gameBoard.map( nestedBoardArray =>  [...nestedBoardArray])]
			
		; // Kỹ thuật clone hẳn cái Array ra để sửa, không sửa trực tiếp vào pointer nhằm tránh weird behavior

		console.log(updatedGameBoard);
		updatedGameBoard[rowIndex][colIndex] = '0';

		setGameBoard(updatedGameBoard);
		return updatedGameBoard;


		// console.log(updatedGameBoard[rowIndex][colIndex]);

		// if (updatedGameBoard[rowIndex][colIndex] == null) {
		// 	updatedGameBoard[rowIndex][colIndex] = playerTurn;
		// 	console.log(updatedGameBoard);
		// 	setGameBoard(updatedGameBoard);
		// 	switchTurn();
		// 	decideWinner();
		// }
	};

	return (
		<>
			<ol id="game-board">
				{gameBoard.map((row, rowIndex) => {
					return (
						<li key={rowIndex}>
							<ol>
								{row.map((playerSymbol, colIndex) => (
									<li key={colIndex}>
										<button
											onClick={() => {
												handleSelectSquare(rowIndex, colIndex);
											}}
										>
											{playerSymbol}
										</button>
									</li>
								))}
							</ol>
						</li>
					);
				})}
			</ol>
			<div>Next player turn: {playerTurn}</div>
		</>
	);
};

export default GameBoard;
