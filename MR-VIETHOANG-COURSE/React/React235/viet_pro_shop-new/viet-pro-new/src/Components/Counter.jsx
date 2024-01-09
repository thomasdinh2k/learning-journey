import { useState } from "react";

const Counter = () => {
    
    const [currentNumber, updateCurrentNumber] = useState(0)
    
    const handleBtnClick = (indicator) => {
        if (indicator === "+") {
            updateCurrentNumber( currentNumber + 1);
        } else {
            updateCurrentNumber( currentNumber - 1);
        }
    }

    return(
        <>
            <h1>Bé tập đếm</h1>
            <h2>Đang là số: <strong>{currentNumber}</strong></h2>
            <button onClick={ () => {handleBtnClick("+")}}>+</button>
            <button onClick={ () => {handleBtnClick("-")}}>-</button>
        </>
    );
}

export default Counter;