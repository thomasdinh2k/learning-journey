import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"

import { useState } from "react";

function App() {
  
  const [annualData, setAnnualData] = useState([]);
  const [isValid, setIsValid] = useState("");
  
  return (
    <>
      <Header/>
      <UserInput annualData={annualData} setAnnualData={setAnnualData} setIsValid={setIsValid}/>
      {isValid == "" && <p>{isValid}</p>}
      <Result annualData={annualData}/>
    </>
  )
}

export default App
