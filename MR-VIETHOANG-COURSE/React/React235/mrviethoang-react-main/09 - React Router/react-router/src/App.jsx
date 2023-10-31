// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Page404 from "./Components/pages/Page404";
import Contact from "./Components/pages/Contact";
import Detail from "./Components/pages/Detail";
import Footer from "./Components/layouts/Footer";


function App() {
  return (
    <>
      <div id="wrap">
        <BrowserRouter>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/About">
                        About
                      </Link>
                    </li>
                    <Link className="nav-link" to="/Contact">
                      Contact
                    </Link>
                    <li className="nav-item">
                      <Link className="nav-link" to="/Detail">
                        Detail
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={Contact} />
            <Route path="/Detail" element={<Detail/>} />
            <Route path="*" element={Page404} />

          </Routes>
          
        </BrowserRouter>
      <Footer/>
      </div>
      
    </>
  );
}

export default App;
