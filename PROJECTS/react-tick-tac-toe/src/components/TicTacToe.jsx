import Board from "./Board";
import { useState } from "react";
import { useEffect } from "react";
import GameOver from "./GameOver";
import GameState from "./GameState";
import Reset from "./Reset";
import gameOverSoundAsset from "../sound/gameOver.wav";
import clickSoundAsset from '../sound/clickSound.wav';

//Object Creation
const gameOverSound = new Audio(gameOverSoundAsset);
gameOverSound.volume = 0.3;

const clickSound = new Audio(clickSoundAsset);
clickSound.volume = 0.2;


// DRILLING :: Parent of all (State Producer)
// Players Value
const PLAYER_X = 'X';
const PLAYER_O = 'O';

//Array of winning combo & result => object
const winningCombos = [
    //Rows
    {combo : [0,1,2], strikeClass : "strike-row-1"},
    {combo : [3,4,5], strikeClass : "strike-row-2"},
    {combo : [6,7,8], strikeClass : "strike-row-3"},

    //Columns
    {combo : [0,3,6], strikeClass : "strike-column-1"},
    {combo : [1,4,7], strikeClass : "strike-column-2"},
    {combo : [2,5,8], strikeClass : "strike-column-3"},

    //diagonals
    {combo : [0,4,8], strikeClass : "strike-diagonal-1"},
    {combo : [2,4,6], strikeClass : "strike-diagonal-2"}
];

function checkWinner(tiles, setStrikeClass, setGameState){
    // console.log("check winner");
    for(const {combo, strikeClass} of winningCombos){
        //retrive actual value from tile
        const tileV1 = tiles[combo[0]];
        const tileV2 = tiles[combo[1]];
        const tileV3 = tiles[combo[2]];

        // a little comparative mathematics here 
        if(tileV1 !== null && tileV1 === tileV2 && tileV1 === tileV3){
            setStrikeClass(strikeClass);

            //setting winner
            if(tileV1 === PLAYER_O)
                setGameState(GameState.playerOWins);
            else{
                setGameState(GameState.playerXWins);
            }
            //Winner decided
            return;
        }
    }

    //Still no winner, check if all tiles are filled
    const areAllTilesFilledIn = tiles.every((tile)=> tile !== null);
    if(areAllTilesFilledIn)
        setGameState(GameState.draw); 
}

function TicTacToe(){

    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
    const [strikeClass, setStrikeClass] = useState();
    const [gameState, setGameState] = useState(GameState.inProgress);

    // Handle tile click event
    const handleTileClick = (index) => {
        // console.log("Clicked Tile : ", index);

        if(gameState !== GameState.inProgress){
            return;
        }

        if(tiles[index] !== null)
            return;

        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        //change playerTurn
        if(playerTurn === PLAYER_X){
            setPlayerTurn(PLAYER_O);
        }
        else{
            setPlayerTurn(PLAYER_X);
        }
    }

    //handle reset event
    const handleReset = ()=>{
        console.log("RESET ALL");
        setTiles(Array(9).fill(null));
        setGameState(GameState.inProgress);
        setPlayerTurn(playerTurn);
        setStrikeClass();
        
    }

    //Use effect to catch change
    useEffect(()=>{
        checkWinner(tiles, setStrikeClass, setGameState);
    }, [tiles])

    useEffect(()=>{
        if(tiles.some((tile) => tile !== null)){
            clickSound.play(); 
        }
    }, [tiles]);

    useEffect(()=>{
        if(gameState !== GameState.inProgress){
            gameOverSound.play();
        }
    }, [gameState]);

    return (
    <div>
        <h1>Tic Tac Toe</h1>
        <Board 
        playerTurn={playerTurn}
        tiles={tiles} 
        onTileClick={handleTileClick}
        strikeClass={strikeClass}
        />

        <GameOver gameState={gameState} />
        <Reset gameState={gameState} onReset={handleReset} />
    </div>
    );
}

export default TicTacToe;