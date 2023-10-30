import React from "react";
import Board from "./components/Board";
import "./styles.css";

const App = () => {
  return (
    <>
      <h1>Tick Tac Toe - The game</h1>
      <p>This is a Tic Tac Toe project, which created based on <a href="https://react.dev/learn/tutorial-tic-tac-toe#implementing-time-travel">this instruction</a> by Meta's React</p>
      <br></br>
      <h2>Main features</h2>
      <li>Let's you play tic tac toe</li>
      <li>Indicates when a player has won the game</li>
      <li>Store a game's history as a game progress</li>
      <li>Allows players to review a game's history and see previous versions of a game's board</li> 
      <br></br>
      <Board />
    </>
  );
};

export default App;

