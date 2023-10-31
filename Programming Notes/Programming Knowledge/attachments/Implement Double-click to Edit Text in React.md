#react 
# Create an Element which allows double click to `edit`



Using [[Javascript Main Note#Ternary Operator]] to create heading

![[Pasted image 20231023074306.png]]
![[Pasted image 20231023075553.png | As usr double-clicked on to the heading, the input field will pop up]]

Also, we use [[CSS main note#^4b654f |OnBlur()]] to specify what to do when user *unfocus* the input window 
# Store value when user type
```js
const [headerInput, setHeaderInput] = useState("About Samsung Galaxy Fold 5");

// Change the State when user type
onChange={(event) => setHeaderInput(event.target.value)}

```
# Save value when out of focus
```js
const [headerInput, setHeaderInput] = useState("About Samsung Galaxy Fold 5");

const handleKeyDown = (event) => {
    // Conditional statement so that the code only triggers when Enter got registered
    if (event.key === "Enter") {
    // "Onblur" that state
      setShowHeader(!showHeader);
    }
  }

// Change the State when user type
onChange={(event) => setHeaderInput(event.target.value)}

// Detect keyboard input
onKeyDown={(event) => handleKeyDown(event)}
```
