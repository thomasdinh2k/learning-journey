import { useState } from "react";

const Player = ({ playerName, playerSymbol }) => {
	const [inputState, changeInputState] = useState(false);
	const [enteredPlayerName, changeEnteredPlayerName] = useState(playerName);

	const showPlayerNameInput = () => {
		changeInputState(!inputState);
	};

	const playerNameHandler = (event) => {
		let userInput = event.target.value;
		console.log(userInput);
		return userInput;
		// changeEnteredPlayerName(userInput);
	};

	const updatePlayerName = (event) => {
		let userInput = playerNameHandler(event);
		changeEnteredPlayerName(userInput);
	};
	// function handlePlayerNameInput(playerName) {
	//     console.log(`Changing name of ${playerName.playerName}`);
	//     changeInputState(!inputState);
	//     console.log(inputState);
	// }

	return (
		<>
			<li>
				{inputState && (
					<input
						className="player-name"
						placeholder={playerName}
						onChange={(event) => {
							playerNameHandler(event);
						}}
						onBlur={(event) => {
							updatePlayerName(event);
						}}
					></input>
				)}
				<span className="player-name">{enteredPlayerName}</span>
				<span className="player-symbol">{playerSymbol}</span>
				{inputState ? (
					<button onClick={(event) => {updatePlayerName(event)}}>Save</button>
				) : (
					<button onClick={showPlayerNameInput}>Modify</button>
				)}
			</li>
		</>
	);
};

export default Player;
