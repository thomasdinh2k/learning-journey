import React from "react";
import ReactDom from "react-dom";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Slide from "./components/Slide";
import Student from "./components/Student";
import Class from "./components/Class";
import Library from "./components/Library";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
    return (
      <div>
      {/*	Start Slide	*/}
      <Slide />
      {/*	End Slide	*/}
      
      {/*	Student	*/}
      <Student />
      {/*	End Student	*/}
      {/*	Class	*/}
      <Class />
      {/*	End Class	*/}
      {/*	Library	*/}
      <Library />
      {/*	End Library	*/}
      {/*	Footer	*/}
      <Footer />
      {/*	End Footer	*/}
    </div>
    );
}
export default App;
