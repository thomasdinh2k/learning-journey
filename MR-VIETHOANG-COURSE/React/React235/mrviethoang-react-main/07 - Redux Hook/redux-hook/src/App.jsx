/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [num, setNum] = useState(10);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <div id="main">
              <h3>{num}</h3>
              <div>
                <button onClick={() => setNum(Math.round(Math.random(1)*10))}>Get number</button>
                <button onClick={() => {setNum(0)}}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
