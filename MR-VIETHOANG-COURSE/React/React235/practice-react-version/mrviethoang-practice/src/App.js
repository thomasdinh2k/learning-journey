import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let initialHeader = "About Samsung Galaxy Fold 5";
  let initialDescription = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    `;

  const [showHeader, setShowHeader] = useState(true);
  const [headerContent, setHeaderContent] = useState("Loading....");

  const [showDescription, setShowDescription] = useState(true);
  const [descriptionContent, setDescriptionContent] = useState("");

  const handleFieldChange = ( event ) => {
    if (event.target.value.trim() === "") {
      event.target.type === "text" ? setHeaderContent(initialHeader) : setDescriptionContent(initialDescription);
    } else {
      event.target.type === "text" ? setHeaderContent(event.target.value) : setDescriptionContent(event.target.value);
    }
    setShowHeader(!showHeader);
    setShowDescription(!showDescription);
  }
  
  const handleKeyDown = (event) => {
    // // console.log(event);
    // if (event.key === "Enter") {
    //   // console.log(event.target.value);
    //   // console.log(event.target.type);

    //   if (event.target.type === "text") {
    //     if (event.target.value === "") {
    //       setHeaderContent(initialHeader);
    //     }
    //     setShowHeader(!showHeader);
    //   } else {
    //     if (event.target.value === "") {
    //       setDescriptionContent(initialDescription)
    //     }
    //     setShowDescription(!showDescription);
    //   }
    // }
    if (event.key === "Enter"){
      handleFieldChange(event);
    }
  };

  

  useEffect(() => {
    setTimeout(() => {
      setHeaderContent(initialHeader);
    }, 1200);
    setTimeout(() => {
      setDescriptionContent(initialDescription);
    }, 1350);
  }, []);

  return (
    <>
      <div id="main">
        <div className="content-item">
          <img src="img/galaxy-fold-5.webp" />

          {/* Header */}
          {showHeader ? (
            <h3 onDoubleClick={() => setShowHeader(!showHeader)}>
              {headerContent}
            </h3>
          ) : (
            <input
              type="text"
              value={headerContent}
              placeholder="Enter Title..."
              style={{
                display: "inline-block",
                height: "25px",
                maxWidth: "250px",
                fontWeight: "bolder",
              }}
              onChange={(event) => setHeaderContent(event.target.value)}

              onBlur={(event) => {handleFieldChange(event)}}
              onKeyDown={(event) => handleKeyDown(event)}
            ></input>
          )}

          {showDescription ? (
            <p onDoubleClick={() => setShowDescription(!showDescription)}>
              {descriptionContent}
            </p>
          ) : (
            <textarea
              style={{
                display: "inline-block",
                maxWidth: "550px",
                minHeight: "450px",
              }}
              value={descriptionContent}
              onChange={(event) => {
                setDescriptionContent(event.target.value);
              }}
              // onBlur={() => setShowDescription(!showDescription)}
              onBlur={(event) => {handleFieldChange(event)}}
              onKeyDown={(event) => handleKeyDown(event)}
            ></textarea>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
