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

			/**
			 * TODO Helper đã nhận ra điều kiện thắng nhưng khi đẩy sang function thì lại không return điều kiện thắng đấy về cho Winner. Xem lại điều kiện này
			 */

			// Test decide winner
			if (winnerDecideHelper(xTurns, WINNING_COMBINATIONS) == true) {
				console.log("Player X won");
			} else if (winnerDecideHelper(yTurns, WINNING_COMBINATIONS) == true) {
				console.log("Player Y won");
			}
		});

		function countIndex(array) {
			const tempCount = {}

			array.forEach( arrayItem => {
				tempCount[arrayItem] = (tempCount[arrayItem] ? tempCount[arrayItem] : 0) + 1
			} )
			
			for (const num in tempCount) {
				if (tempCount[num] === 3) {
					return true;
				}
			}
		}

		function findCorrespondingArray(testElement, winningElement) {
			return (
				testElement.col === winningElement.column &&
				testElement.row === winningElement.row
			);
		}

		function winnerDecideHelper(testArray, WINNING_COMBINATIONS) {
			let result = [];
			testArray.forEach( element => {
				WINNING_COMBINATIONS.forEach( (winning_combination, winning_combination_index) => {
					winning_combination.forEach( (winningElement, winningElementIndex) => {
						const match = findCorrespondingArray(element, winningElement);
						if (match) {
							console.log(`Found a match data at WINNING_COMBINATION[${winning_combination_index}][${winningElementIndex}]`);

							result.push(`${winning_combination_index}`);
						}
					})
				})

				console.log("result", result);
				if (countIndex(result)) {
					console.log("PLAYER {} WIN");
					return true;
				}
				
			})
		}
		// console.log("FINAL LOG PlayerX", xTurns);
		// console.log("FINAL LOG PlayerY", yTurns);

		/**
		 TODO: So sánh data này với winning combinations [main-react]
		 Chỉ cần so sánh được là tìm được ra điều kiện chiến thắng rồi
		 OK??
		*/

		// const testArray = [
		// 	{
		// 		row: 2,
		// 		col: 2,
		// 	},
		// 	{
		// 		row: 2,
		// 		col: 1,
		// 	},
		// 	{
		// 		row: 2,
		// 		col: 0,
		// 	},
		// ]; // Trùng với winning_condition[2]

		/**
		 *  So sánh giữa array mẫu và winning_condition
		 * - B1: So sánh element từ testArray và tìm ra index của element bên Winning_combinations
		 * - B2: Nếu element match với winning thì xuất ra index của element của winning_combinations
		 * - B3: Tiếp tục so sánh element từ testArray với winning_combination xem có trùng không? Nếu cả 3 trùng thì match
		 * - B4: Return index của winnning_condition khi cả 3 cùng match
		 */
		

		
		

		// console.log("TEST WIN", WINNING_COMBINATIONS[2]);
		
		



		// WINNING_COMBINATIONS.forEach((winningCombination) => {
		// 	let flag = 0;
		// 	testArray.forEach((testElement) => { 
		// 		winningCombination.forEach((winningElement, winIndex) => { // Array con của winning_combinations
		// 			if (findCorrespondingArray(testElement, winningElement)) {
		// 				// Found correct element
		// 				console.log(`Found dup element at index ${winIndex}`);
		// 				if(winningCombination.find(findCorrespondingArray()))
		// 			} else {
		// 				//
		// 			}
		// 		});
				

		// 	});
		// });

		// console.log(WINNING_COMBINATIONS.find( comb => {
		// 	return testArray[0].row === comb.row  && testArray[0].col === comb.column
		// }));

		

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
