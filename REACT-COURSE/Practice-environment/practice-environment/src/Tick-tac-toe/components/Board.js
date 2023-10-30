import "./Board.css";
import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

// function onSquareClick() {}

function Counter() {
  const [count, setCount] = useState(0);
  function incrementCount(params) {
    setCount(count + 1);
  }
  return (
    <>
      <h3>Counting {count}</h3>
      <button onClick={incrementCount}>Increment please!</button>
    </>
  );
}

function Board({xIsNext, squares, onPlay}) {

  function handleClick(i) {
    if (squares[i] != null || calculateWinner(squares)) {
      return; // Return early if Square already has value
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      // Check which state it is
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  
  // Declare winner
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }


  return (
    <>
      <>
        <Counter />
      </>
      <>
      <div className="status">{status}</div>
      </>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}

export default function Game(){
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0); 
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    console.log(history);
    // setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // Combine the history with the next move
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
    // setXIsNext(!xIsNext) // Flipping between players
  }
  
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  };

  const moves = history.map( (square, move) => {
    let description;
    if (move > 0) {
      description = `Go to move ${move}`;
      console.log(`move = ${move}`);
    } else {
      description = `Go to game start`;
      console.log(`move = ${move}`);
    }
    return (
      <li key={move}>
        <button onClick={ () => jumpTo(move)}>{description}</button>
      </li>
    )
  })
  
  return (
    <>
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/> 
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </>
  );
}

function calculateWinner(square) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; // Destructure the line to variable a, b and c
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a]; // Return Square so that the handleClick() function can stop early
    }
  }
  return null;
}
