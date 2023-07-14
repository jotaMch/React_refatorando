import React from "react";
function OneLine(prop){
    return(
        <div>
            

            <button onClick={() => prop.handleButtonClick(7)}>7</button>
            <button onClick={() => prop.handleButtonClick(8)}>8</button>
            <button onClick={() => prop.handleButtonClick(9)}>9</button>
            <button className='orange' onClick={() => prop.handleButtonClick("*")}>X</button>

        </div>
    )
}

export default OneLine;