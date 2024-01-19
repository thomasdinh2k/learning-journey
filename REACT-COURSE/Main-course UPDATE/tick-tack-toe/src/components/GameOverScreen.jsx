const GameOver = ( { winner, handleRematch }) => {
    return(
        // <div id="game-over">
        <div id="game-over">
            <h2>Game Over!</h2>
            {/**
             * TODO Display actual player-name who won the game
             
             
             */}
            { winner && <p>{winner} has won!</p>}
            {!winner && <p>It&#39;s a draw</p>}
            
            <p>
                <button onClick={handleRematch}>Rematch!</button>
            </p>
        </div>
    );
}

export default GameOver;