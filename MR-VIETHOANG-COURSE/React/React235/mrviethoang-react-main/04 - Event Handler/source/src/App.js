import React from "react"
import useState from "react"
import Large from "./components/Large"
import Small from "./components/Small"

function App() {

  const [imageUrl, setImageUrl] = React.useState("images/img-1.jpg")
  const setStateImageUrl = (url)=>setImageUrl(url)
  
  return (
    <div id="products">
      <h1>Hello World</h1>
      <Large imageUrl={imageUrl}/>
      <Small imageUrl={imageUrl} setStateImageUrl={setStateImageUrl}/>
    </div>

  )
}

export default App