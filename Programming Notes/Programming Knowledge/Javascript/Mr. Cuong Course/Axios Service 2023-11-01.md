![[Pasted image 20231101192917.png]]
# Get DATA using useEffect();
```jsx
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
// Get DATA
axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
      console.log(data);
    })
  }, [])

  return (
    
    <>
      <h2>Test API DATA</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, omnis?</p>
      
    </>
  )
}

export default App
```
# Display DATA from API using Map();
[[Javascript Main Note#^86cbea]]
```jsx
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setUserData(data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <h2>Test API DATA</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, omnis?</p>

      <ul>
        {userData.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}
            <br />
            <strong>Email:</strong> {user.email}
            <br />
            {/* Add more fields here */}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

- Step 1: Create A State
	- Initial State will be an *Array* since we are **working with APIs**
		`const [userData, setUserData] = useState([]);`
- Step 2: Using map to iterate over the value in that `State` and display them as needed
Remember [[The use of ()=>()]] when iterate through *Map()*
		- Remember to add `ID` while iterating
		[[Hook - Gắn vào Component#^860aaa]]
		

If you need to **iterate two or more Array in a row**, you need to:
- Step 1: Create two `states` for both arrays
- Step 2: Using `Map()` function and use `index` argument to properly align between arrays [[Iterate an Array and render a list of items in React#^b90b85]]

