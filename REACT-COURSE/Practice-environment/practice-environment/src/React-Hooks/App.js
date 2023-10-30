import React, { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [showText, setShowText] = React.useState(false);
  const [showInputField, setShowInputField] = React.useState(false);

  const [posts, setPosts] = useState([]);
  const [state, setState] = useState('posts');

  const tabs = ["posts", "comments", "albums"];
  
  console.log(state);
  

  // useEffect(() => {
  //   console.log(`Render ${title}`);
  //   // Document.setTitle(title);
  //   document.title = title
  // });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
    console.log('Tab changed');
  }, [state]);

  return (
    <div>
      {showText && <h2>Thomas Dinh</h2>}
      <h5> 24 </h5>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Toggle Showing Name
      </button>
      <button
        onClick={() => {
          setShowInputField(!showInputField);
        }}
      >
        Show Input Field
      </button>

      {tabs.map((tab) => (
        <button
          id={tab}
          onClick={() => {
            setState(tab);
          }}
          style={
            state === tab
              ? {
                  backgroundColor: "salmon",
                  color: "white",
                  transition: "all 0.25s",
                }
              : {}
          }
        >
          {tab}
        </button>
      ))}

      {showInputField && (
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
      )}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
