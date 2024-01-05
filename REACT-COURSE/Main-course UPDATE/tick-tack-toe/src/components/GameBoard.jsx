const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

const GameBoard = ({ onSelectSquare, gameTurns }) => {
	let gameBoard = initialGameBoard;

	// Convert "gameTurns" update to the GameBoard array
	for (const turn of gameTurns) {
		// Object Destruct technique
		const { square, player } = turn;
		const { row, col } = square;
		// With destructured variable, now update the game board
		gameBoard[row][col] = player;
		// console.log("current Gameboard", gameBoard);
	}

	// const updatedTurns = [
	// 	{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
	// 	...prevTurns,
	// ];

	// Function executes when user click on the squares
	// const handleSelectSquare = (rowIndex, colIndex) => {
	// 	console.log(`Row now: ${rowIndex}`);
	// 	console.log(`Col now: ${colIndex}`);

	// 	console.log(gameBoard);

	// 	const updatedGameBoard = [
	// 		...gameBoard.map((nestedBoardArray) => [...nestedBoardArray]),
	// 	]; // Kỹ thuật clone hẳn cái Array ra để sửa, không sửa trực tiếp vào pointer nhằm tránh weird behavior

	// 	console.log(updatedGameBoard);
	// 	updatedGameBoard[rowIndex][colIndex] = activePlayer;

	// 	setGameBoard(updatedGameBoard);
	// 	onSelectSquare();
	// 	return updatedGameBoard;
	// };

	return (
		<>
			<ol id="game-board">
				{gameBoard.map((row, rowIndex) => {
					return (
						<li key={rowIndex}>
							<ol>
								{row.map((playerSymbol, colIndex) => (
									<li key={colIndex}>
										<button onClick={() => onSelectSquare(rowIndex, colIndex)}>
											{playerSymbol}
										</button>
									</li>
								))}
							</ol>
						</li>
					);
				})}
			</ol>
			{/* <div>Current player turn: {activePlayer}</div> */}
		</>
	);
};

export default GameBoard;
