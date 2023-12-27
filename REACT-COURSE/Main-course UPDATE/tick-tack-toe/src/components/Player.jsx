import { useState } from "react";

const Player = ({ initialName, playerSymbol }) => {
	const [inputState, changeInputState] = useState(false);
	const [firstTimeChange, setFirstTimeChange] = useState(true);
	const [playerName, setPlayerName] = useState(initialName);


	const handleEditClick = () => {}


	const showPlayerNameInput = () => {
		// changeInputState(!inputState);
		changeInputState(() => !inputState);
	};

	const handleNameChange = (event) => {
		const outputName = event.target.value;
		setPlayerName(outputName);
		setFirstTimeChange(false);
	};

	const updatePlayerName = () => {
		// handleNameChange();
		changeInputState(false);
	};

	const handleEnter = (event) => {
		if (event.key === "Enter") {
			updatePlayerName();
		}
	};

	const editablePlayerName = inputState ? (
		<input
			className="player-name player"
			value={firstTimeChange ? " " : playerName}
			type="text"
			required
			onChange={handleNameChange}
			onBlur={updatePlayerName}
			onKeyDown={(event) => {
				handleEnter(event);
			}}
		></input>
	) : (<span className="player-name">{playerName}</span>);
	return (
		<li>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{playerSymbol}</span>
			</span>
			<button onClick={handleEditClick}>{inputState ? "Save" : "Modify"}</button>
			{/* {inputState ? (
					<button onClick={updatePlayerName}>Save</button>
				) : (
					<>
						<span className="player-name">{playerName}</span>
						<button onClick={showPlayerNameInput}>Modify</button>
					</>
				)} */}
		</li>
	);
};

export default Player;
