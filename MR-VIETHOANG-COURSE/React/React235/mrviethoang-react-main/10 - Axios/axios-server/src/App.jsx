import "./App.css";
import UsrTable from "./UsrTable";
import "./bootstrap.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const Http = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" });

  React.useEffect(() => {
    Http.get("users", {
      params: { name: "Leanne Graham" },
    }).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return <></>;
}

export default App;

// https://jsonplaceholder.typicode.com/users