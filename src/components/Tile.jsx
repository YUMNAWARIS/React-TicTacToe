import { useState } from "react";
import './tile.css'
function Tile(props)
{
    const [value, setValue] = useState("");
    function clickHandler(e){
        if(value == '' || value ==null){
            const turn = props.turn;
            setValue(turn);
            props.changeTurn(props.id);
        }
    }
    return(
        <>
        <div className="tile" onClick={clickHandler}>
            <h1>
                {value}
            </h1>
        </div>
        </>
    )
}

export default Tile;