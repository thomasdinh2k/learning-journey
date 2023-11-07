import "./App.css";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import './styles/bootstrap.css';
import './styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div id="wrapper" className="container">
        <Header/>
        <Menu/>
      </div>
    </>
  );
}

export default App;
