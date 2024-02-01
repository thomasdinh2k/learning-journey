import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"

import { useState } from "react";

function App() {
  
  const [annualData, setAnnualData] = useState([]);
  
  return (
    <>
      <Header/>
      <UserInput annualData={annualData} setAnnualData={setAnnualData}/>
      <Result annualData={annualData}/>
    </>
  )
}

export default App
