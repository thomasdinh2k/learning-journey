const Log = ({ turns, playerInfo }) => {
	return (
		<ol id="log">
			{turns.map((turn) => (
				<li key={`${turn.square.row}...${turn.square.col}`}>
					({playerInfo[turn.player].toUpperCase()} || {turn.player}) selected {turn.square.row}, {turn.square.col}
				</li>))
			}
		</ol>
	);
};

export default Log;
