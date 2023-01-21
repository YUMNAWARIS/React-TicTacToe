import Tile from "./Tile";
import { useState } from "react";
function Board(props)
{
    const [turn, setTurn] = useState("X");
    const [winner, setwinner] = useState(-1);
    const [boardInfo, setboardInfo] = useState([0,1,2,3,4,5,6,7,8]);

    function checkForWin(temp_Board){
        console.log(temp_Board[0] == temp_Board[1] && temp_Board[0] == temp_Board[2])
        // Row Check
        if(temp_Board[0] == temp_Board[1]&& temp_Board[0]==temp_Board[2]){
            return temp_Board[0];
        }
        else if(temp_Board[3] == temp_Board[4]&& temp_Board[3] == temp_Board[5]){
            return temp_Board[0];
        }
        else if(temp_Board[6] == temp_Board[7] && temp_Board[6]== temp_Board[8]){
            return temp_Board[0];
        }
        // Columns Check
        if(temp_Board[0] == temp_Board[3]&& temp_Board[0] == temp_Board[6]){
            return temp_Board[0];
        }
        else if(temp_Board[1] == temp_Board[4]&& temp_Board[1] == temp_Board[7]){
            return temp_Board[1];
        }
        else if(temp_Board[2] == temp_Board[5]&& temp_Board[2] == temp_Board[8]){
            return temp_Board[2];
        }
        // Diagonal Check
        if(temp_Board[0] == temp_Board[4]&& temp_Board[0] == temp_Board[8]){
            return temp_Board[0];
        }
        else if(temp_Board[2] == temp_Board[4]&& temp_Board[2] == temp_Board[6]){
            return temp_Board[0];
        }
        return -1;
    }
    function changeTurn(id){
        const temp_Board = boardInfo.map((m)=>{
                if(m==id) return turn;
                else return m;
            });
        setboardInfo(temp_Board);
        const winner = checkForWin(temp_Board);
        if(winner!=-1){ 
            setwinner(winner);
            setboardInfo([1,2,3,4,5,6,7,8]);
        }
        console.log(winner);
        if(turn == 'X') {
            setTurn('O');
        }
        else {
            setTurn('X');
        };
    }
    return(
        <>
            {(winner != -1)? (<> <h3>{winner} has won the game...</h3></>) : 
            (<>
                <div>
                    <h5>Player: {turn}</h5>
                </div>
                <div style={{display:'flex'}}>
                    <Tile id='0' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='1' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='2' turn={turn} changeTurn={changeTurn}></Tile>
                </div>

                <div style={{display:'flex'}}>
                    <Tile id='3' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='4' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='5' turn={turn} changeTurn={changeTurn}></Tile>
                </div>

                <div style={{display:'flex'}}>
                    <Tile id='6' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='7' turn={turn} changeTurn={changeTurn}></Tile>
                    <Tile id='8' turn={turn} changeTurn={changeTurn}></Tile>
            </div>
            </>)}
        </>
    );
}

export default Board;