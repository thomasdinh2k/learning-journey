import { useState } from "react";

const Player = ({ initialName, playerSymbol, isPlayerActive }) => {
	const [inputState, changeInputState] = useState(false);

	const [playerName, setPlayerName] = useState(initialName);

	function handleEditClick() {
		changeInputState(!inputState);
	}

	function handleNameChange(event) {
		setPlayerName(event.target.value);
	}

	function handleEnter(event) {
		if (event.key === "Enter") {
			handleEditClick();
		}
	}
	const editablePlayerName = inputState ? (
		<input
			className="player-name player"
			// value={playerName}
			type="text"
			required
			onChange={handleNameChange}
			onBlur={handleEditClick}
			onKeyDown={handleEnter}
		></input>
	) : (
		<span className="player-name">{playerName}</span>
	);
	return (
		<li className={isPlayerActive === playerSymbol ? "active" : undefined}>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{playerSymbol}</span>
			</span>
			<button onClick={handleEditClick}>
				{inputState ? "Save" : "Modify"}
			</button>
		</li>
	);
};

export default Player;
