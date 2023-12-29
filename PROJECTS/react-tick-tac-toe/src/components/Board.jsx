import Strike from "./Strike";
import Tile from "./Tile";

function Board({tiles, onTileClick, playerTurn, strikeClass}){
    return (
        <div className="board">
            <Tile 
            playerTurn={playerTurn}
            value={tiles[0]} 
            onClick={()=> onTileClick(0)} 
            className="right-border bottom-border" />

            <Tile 
            playerTurn={playerTurn}
            value={tiles[1]} 
            onClick={()=> onTileClick(1)} 
            className="bottom-border right-border" />

            <Tile 
            playerTurn={playerTurn}
            value={tiles[2]} 
            onClick={()=> onTileClick(2)} 
            className="bottom-border"/>
          
            <Tile 
            playerTurn={playerTurn}
            value={tiles[3]} 
            onClick={()=> onTileClick(3)} 
            className="bottom-border right-border" />

            <Tile 
            playerTurn={playerTurn}
            value={tiles[4]} 
            onClick={()=> onTileClick(4)} 
            className="bottom-border right-border" />

            <Tile 
            playerTurn={playerTurn}
            value={tiles[5]} 
            onClick={()=> onTileClick(5)} 
            className="bottom-border" />
         
            <Tile 
            playerTurn={playerTurn}
            value={tiles[6]} 
            onClick={()=> onTileClick(6)} 
            className="right-border" />
          
            <Tile 
            playerTurn={playerTurn}
            value={tiles[7]} 
            onClick={()=> onTileClick(7)} 
            className="right-border" />
          
            <Tile 
            playerTurn={playerTurn}
            value={tiles[8]} 
            onClick={()=> onTileClick(8)} />

            <Strike strikeClass={strikeClass} />
        </div>
    );
}

export default Board;