import React from "react";

function sectionThree(prop) {
    return(
        <div>
            <button onClick={() => prop.handleButtonClick(1)}>1</button>
            <button onClick={() => prop.handleButtonClick(2)}>2</button>
            <button onClick={() => prop.handleButtonClick(3)}>3</button>
            <button className='orange' onClick={() => prop.handleButtonClick("-")}>-</button>
    </div>
    )
}

export default sectionThree;