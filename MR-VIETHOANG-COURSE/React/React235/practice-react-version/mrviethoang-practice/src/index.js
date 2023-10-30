import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

// const App = () => {
//   const [data, setData] = React.useState(true);

//   const updateData = () => {
//     setData(!data);
//   };

//   //DidMount method
//   React.useEffect(() => {
//     console.log("DidMount");
//   }, []);

//   //DidUpdate method
//   React.useEffect(() => {
//     if (!data) {
//       console.log("DidUpdate");
//       setData(!data);
//     }
//   }, [data]);

//   return (
//     <>
//       <h1>Hello React</h1>
//       <button onClick={updateData}>Action</button>
//     </>
//   );
// };

ReactDom.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
