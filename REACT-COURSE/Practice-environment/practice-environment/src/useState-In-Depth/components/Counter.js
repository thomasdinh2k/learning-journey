import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const handleCounter = (operator) => {
        if (operator === 'increase') {
            setNum(num + 1);
        } else {
            setNum(num - 1);
        }
    }

    return(
        <div>
            <h1>Counter: {num}</h1>
            <button onClick={() => {handleCounter("increase")}}>Increase</button>
            <button onClick={() => {handleCounter()}}>Decrease</button>

        </div>
    );
}

export default Counter;

/*
    1. Create a new Vite React Project

    2. Create a Counter.jsx file to create a Counter
       Component that you export within it

    3. Inside Counter, create an <h1> with two <button>
       elements. One button should have the text '-' inside
       while the other has a '+' inside.

    4. Make it so that the <h1> displays a counter starting at
       0 and when you click the buttons, they act appropriately.
       (The counter in the h1 should go up and down by 1)

    5. Import the Counter component in to main.jsx and replace the
       <App /> with it and test that it works in the Browser
*/