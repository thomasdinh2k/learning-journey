import "./App.css";
import UsrTable from "./UsrTable";
import './bootstrap.css'
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [photoData, setPhotoData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
    // console.log(data);  
    setUserData(data);
    });

    // axios.get("https://jsonplaceholder.typicode.com/photos").then( ({data}) => {
    //   // console.log(photoData[0].thumbnailUrl);
    //   setPhotoData(data);
    // });

    axios.get("https://api.slingacademy.com/v1/sample-data/photos").then(({data}) => {
      // console.log(data.photos);
      setPhotoData(data.photos);
    })
  }, []);

  return (
    <>
      <h2>Test API DATA</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, omnis?
      </p>
      {photoData.slice().reverse().map(photoItem => (<img key={photoItem.id} src={photoItem.url}/>))}
      <UsrTable userData={userData} photoData={photoData}/>
    </>
  );
}

export default App;
