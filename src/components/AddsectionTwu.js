import React from "react";

function Numbers(prop) {
    return (
        <div>
            <button onClick={() => prop.handleButtonClick(4)}>4</button>
            <button onClick={() => prop.handleButtonClick(5)}>5</button>
            <button onClick={() => prop.handleButtonClick(6)}>6</button>
            <button className='orange' onClick={() => prop.handleButtonClick("+")}>+</button>
        </div>
    )
}

export default Numbers;