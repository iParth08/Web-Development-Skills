import GameState from "./GameState";

function GameOver({gameState}) {
    switch (gameState){
        case GameState.inProgress:
            return <></>;
        case GameState.playerXWins:
            return <div className="game-over">Player X, Wins !</div>;
        case GameState.playerOWins:
            return <div className="game-over">Player O, Wins !</div>;
        case GameState.draw:
            return <div className="game-over">OOOPS! DRAW</div>;
        
        
        default:
            return <>error</>

    }
    
    // return ( 
    //     <div className="game-over">Game Over, Pal!</div>
    //  );
}

export default GameOver;