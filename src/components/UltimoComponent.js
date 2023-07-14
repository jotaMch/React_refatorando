import React from "react";

function final(prop) {
    return (
        <div>
            <div>
                <button onClick={() => prop.handleButtonClick(0)}>0</button>
                <button onClick={() => prop.handleButtonClick(",")}>,</button>
                <button className='orange' onClick={() => prop.handleButtonClick("/")}>/</button>
                <button className='orange' onClick={() => prop.handleCalculateClick()}>=</button>            
            </div>
        </div>
    )
}

export default final;