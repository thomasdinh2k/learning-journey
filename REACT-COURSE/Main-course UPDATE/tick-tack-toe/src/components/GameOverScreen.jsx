const GameOver = ( { winner, handleRematch }) => {
    return(
        // <div id="game-over">
        <div id="game-over">
            <h2>Game Over!</h2>
            { winner && <p>{winner} has won!</p>}
            {!winner && <p>It&#39;s a draw</p>}
            
            <p>
                <button onClick={handleRematch}>Rematch!</button>
            </p>
        </div>
    );
}

export default GameOver;