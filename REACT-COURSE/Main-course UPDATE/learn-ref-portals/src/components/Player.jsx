import React from "react";

export default function Player() {
	const [ playerName, setPlayerName ] = React.useState();

  const enteredPlayerName = React.useRef("");
  
	const changeName = () => {
  
    const name = enteredPlayerName.current.value;
    
    setPlayerName(name);

    // Directly manipulate DOM value (not recommended)
    enteredPlayerName.current.value = '';
  
  };

	return (
		<section id="player">
			<h2>Welcome {playerName ?? "unknown entity"}</h2>
			<p>
				<input type="text" ref={enteredPlayerName}/>
				<button onClick={changeName}>Set Name</button>
			</p>
		</section>
	);
}
