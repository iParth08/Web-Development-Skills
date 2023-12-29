import GameState from "./GameState";

function Reset({gameState, onReset}) {
    if(gameState === GameState.inProgress){
        return;
        //display nothing
    }
    return ( <button className="reset-button" onClick={onReset}>PLAY AGAIN</button> );
}

export default Reset;