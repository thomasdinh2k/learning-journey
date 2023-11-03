![[Pasted image 20230911071026.png | reload]]
> React is all about ==Components== (Combination of HTML & CSS & a bit Js block of code)

# Install React Project

```terminal
npm install
npm start
```

https://create-react-app.dev/
This website provide code & instructions needed to create a server for react project

### Install using Vite
```terminal
npm create vite

npm run dev -- --host //Expose host
```
# Components-Driven UI
## React Core Syntax & JSX
### Why using Components?
React component is a **JavaScript Function** which typically return *HTML(JSX) code* which will be shown on the screen when that component is used
* Reusability: No need to repeat the code
* Separation of Concern: Keep our code base small and manageable (break-down component)*
> The concept is similar to functions

In React, you build a **component tree** with ==**one root component**== that's mounted into a `DOM node`

### JSX (JavaScript XML)
`fas:Question` What's JSX under the hood and how it works?
> a way to write and structure the user interface of your web application using a syntax that looks similar to HTML.

Few key points about JSX:
* Familiar HTML syntax: `<div>`, `<p>`, `<h1>` etc..
* Embedding JavaScript: Allow us to embed **expressions** and **variables** within HTML-like code. -> I can use **Js logic** and **data** directly within JSX to make ***dynamic UI***
* Component-based:
* Transpiration: 
```js
import React from "react";

function App() {
  const greeting = "Hello, React!";
  return (
    <div>
      <h1>{greeting}</h1>
      <p>This is a simple JSX example.</p>
    </div>
  );
}
```

## Working with Components

### How is a Component built?
![[Pasted image 20230914205954.png]]
JSX (Javascript XML)
![[Pasted image 20230915103206.png]]
In `Index.js`, we rendered as App component (custom App HTML element). This is what that HTML element *looks* like
![[Pasted image 20230915103339.png]]
The HTML code above will be the result **rendered on the screen** 

The convention for naming components is to start it with a capital letter
![[Pasted image 20230915202507.png]]

You must only have ==one root element per **return** statement==
![[Pasted image 20230915203718.png]]
![[Pasted image 20230915204042.png | Correct return statement]]
### CSS in Component
**Inject CSS file to a Component** is just simple as import the CSS file into the Component Js
![[Pasted image 20230915204729.png | Import CSS styling to JS file]]

Beware to use =="className"== instead of "class" when defining class in component return statement
![[Pasted image 20230915205109.png | Correct CSS for Component]]

### Generate Reusable Component
### Use Javascript code inside React return statement
>Dynamic Placeholders

![[Pasted image 20230915210248.png | Create variable and use dynamic placeholders to inject into code]]
### Organize Component FIles


## Working with DATA
In React, we build our own **HTML element** in the end, hence you can define your own attribute *(called "props" in React world)* . And we passed DATA down to the tree branches using `props`
### Passing Data via "Props" (Properties)
> Passing data from one component to another is a ==fundamental== concept in React.

![[Pasted image 20230915210719.png]]
Components can't just use DATA stored in **other components** -> We need to ultilize a concept called **props**
![[Pasted image 20230915210855.png | Use attribute to pass data to the custom component]]

![[Pasted image 20230929094831.png | Fundamental of passing props]]
![[Pasted image 20230929094909.png]]
[[Tutorial Tik Tac Toe| React Documentation (Tik-tac-toe game)]]

#### How to do it
1. Create a Parent Component
2. Define a Prop: In the parent component, you define a property (like a variable that attached to a child component to pass data to it)
![[Pasted image 20230915212620.png | App.js is a Parent Component which has prop name: expenses]]
3. Pass Data as Props
	* [[Iterate an Array and render a list of items in React]]
4. Receive and use Props
```js
// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const dataToPass = "Hello from Parent!";

  return (
    <div>
      {/* Passing dataToPass as a prop to ChildComponent */}
      <ChildComponent message={dataToPass} />
    </div>
  );
}

export default ParentComponent;

```
```js
// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* Accessing and using the prop */}
      <p>{props.message}</p>
    </div>
  );
}

export default ChildComponent;
```

#### Example: Share object props between components
![[Pasted image 20230915220113.png | Exercise preview]]
```js
// Parent Component
import React from 'react';

import Product from './Product';
import './styles.css';

export default function App() {
    const productObject = [
        {
            title: "Product 1",
            price: 10,
            description: "First product"
        },
        {
            title: "Product 2",
            price: 20,
            description: "Second product"
        },
        ];
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product 
            title = {productObject[0].title}
            price = {productObject[0].price}
            description = {productObject[0].description}
            ></Product>
            <Product 
            title = {productObject[1].title}
            price = {productObject[1].price}
            description = {productObject[1].description}
            ></Product>
            
        </div>
    );
}
```
```js
// Child Component
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
```

[[Exercise-01-Component & Props]]

## Composition (#children-props)

The approach of building user interface from **smaller building blocks** is ***compositions*** (mainly to prevent duplication between code)
```js
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```
### Card
Card refers to a **UI component** that is used to display content in a visually and structured way
> It's typically mean some kind of "container" looks

 Characteristic of a Card
 * Container for other content (text, images, buttons or other UI elements)
 * Structured layout
 * Visual style: It has appealing style with borders, shadows, or other decorative elements
 * Reusability 
### Using Card as a Shell
#### Props.children (Wrapper Component)
This is how Props.children works
##### 1. Passing content as Children
```js
<MyComponent>
  <p>Hello, I am passed as props.children</p>
</MyComponent>
```

The `<p>` element is passed as `props.children` to the `MyComponent`
```js
function MyComponent(props) {
  return (
    <div>
      <h1>My Component</h1>
      {props.children} {/* Render the props.children */}
    </div>
  );
}

```

##### 2. Multiple Children

You can pass multiple elements or components as `props.children`, and they will be treated as an ==array of elements.== You can map over or manipulate these elements as needed within your custom component.
```js
<MyComponent>
  <p>First paragraph</p>
  <p>Second paragraph</p>
</MyComponent>
```
##### 3. Sync Class Name 
![[Pasted image 20230918064612.png | Card now has "expense-item" but it could have more classes]]
![[Pasted image 20230918064553.png | By using variable, classes will always be updated]]


**`React.createElement();`** used to create React elements, which are lightweight descriptions of what a component should render
```js
const element = React.createElement(
  type,         // The type of element to create (e.g., a DOM element or a React component).
  [props],      // Optional: Properties and attributes to assign to the element.
  [...children] // Optional: Child elements or text content.
);
```
Example
![[Pasted image 20230925055313.png | Using React.createElemet() for create elements]]

# User Interaction & State
>[!Abstract]+ React to button click in React
>Use Native Dom Event: Element Event

![[Pasted image 20231009044003.png | A button using onClick and an anonymous func]]

Normally, we gonna define a function before we return the Component
![[Pasted image 20231009044407.png | Defining a function before using it in a return statement]]
![[Pasted image 20231009044642.png]]
>[!alert]+ Naming Convention
>If they are *triggered* upon the event, we will end with *Handler* 

## Changing what's display onScreen
![[Pasted image 20231009045759.png]]
By normal way, if we update the title by changing the value while executing `clickHandle` function then it's ===will not work===. 

While the function does triggered but the `title`will ***never*** rendered. 

Keep in mind that the `Component` that is exactly ***a regular function*** that return JSX. So React will call all the function and from top-to-bottom but **never repeat** that function. So in modern application where user wanted to **update** the content on the screen. => We need a way to tell React that something **has been changed** hence should be **re-evaluated**. Which is why *State* appears
### Import required function
```js
import React, { useState } from "react";
```
This one will be auto-inserted if we use the function in our code
`{ useState }` in this case will be called **React Hooks**

>[!tips]+ Some more React Hooks 
**useEffect:** `useEffect` is used for managing side effects in your component, such as data fetching, DOM manipulation, or subscribing to external data sources
> **useContext:** `useContext` is used to access the context of a parent component.
> **useReducer:** `useReducer` is used when you need more advanced state management, especially when the state logic is complex and involves multiple actions

>[!caution] Caution
>Hook can only be called in a function, not **outside function** or in **nested function**

## useState();
We gonna use *Array Destructuring* to define an useState() function
![[Pasted image 20231009053837.png|500]]
After that, we call a function `setTitle();` to **update** that *title* value

>[!quote] Key Concept in React | State
> If you have `DATA`, which might **change** and where **changes to that DATA** is **reflected** on **user interface** => You need **State**
> 
> Because when you use `State`, only the component was registered by `useState` got re-evaluated
### Example Exercise
You're working on a part of an online shop where a discounted price should be displayed on the screen once the user clicked a button.

Your task is to add an **event listener** to listen for **clicks** on the button that's already included in the `App` component.

Upon a button click, the **price should change** from `$100` to `$75`.

**Add a state value** to the existing `App` component function and make sure the state value is both **updated** upon button clicks and **output** as part of the JSX code.

```js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    return (
        <div>
            <p>$100</p>
            <button>Apply Discount</button>
        </div>
    );
}
```

![[Pasted image 20231009054656.png|250]]

Result
```js
export default function App() {
    const [price, setPrice] = React.useState(`$100`);
    const priceHandler=() => {
        setPrice("$75");
    }
    
    
    return (
        <div>
            <p>{price}</p>
            <button onClick={priceHandler}>Apply Discount</button>
        </div>
    );
}
```
### Detailed Explanation of State();

>[!caution]+ Explanation for UseState( );
>In the future, if suddenly a component isn't updating its value, re-watch this tutorial https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595974#overview

## Implement concept to Form Input
![[Pasted image 20231009104044.png]]
With this Todo App, the goal is to **gather the inputs** and combine it into new `Expense` object 
### Gathering User input
#### ==Step 1: Add EventListener *on every keystroke*==
* `onChange` will trigger on every keystroke with the advantage that we can use the **same event** for all inputs types
![[Pasted image 20231009104631.png]]
Now we need to **point** into the **function** that should be defined up-front
![[Pasted image 20231009105050.png]]
#### ==Step 2: Getting user input's value==
We just need to pass an **event** as an argument to the function defined
![[Pasted image 20231009105758.png | Event being passed as an argument]]
![[Pasted image 20231009105659.png | Event is an object that return Object.target.value]]
#### ==Step 3: Storing that value==
Using **State**
![[Pasted image 20231009110355.png| Initially the component rendered as an empty string]]
![[Pasted image 20231009110514.png | Using destructuring]]

>[!question] How can we manage more than one `State`?
>We can use multiple `State`at once and it's fine, all will be *separated* from each other
![[Pasted image 20231009111354.png | Initialise States]]

Even the input field require a *value*, the EventListener always return a ***string*** value. So that's why `useState("");` is the initial value

However, there's a *alternative approach* which use 1 state instead of multiple state slices like above

We can do that by passing an **Object** as an value hence you can **group together** 3 States

*3 state slices approach*
![[Pasted image 20231009112235.png]]
*Grouping state to 1 approach*
![[Pasted image 20231009112439.png | 450]]
The down side with this technique is **performance** because now you will need to **update** the whole 3 each time a value is entered. Also once you update 1 value, you need to ***make sure the other values not get lost*** by using `spreadOperator`

[[Function in JS#****Use the Spread Operator to Evaluate Arrays In-Place****]]

Basically, spread operator allow you to create an Array with all of the value exists in other Array
![[Pasted image 20231009113443.png | Using Spread Operator]]

>[!caution] Grouping State Approach
> This is not a good practice and might not working in niche cases. Keep reading for more info

##### Update State base depends on the previous state
The problem is that the update `State` will depends on `previous State` snap-shot as well 

>[!info]+ Key rule while updating state
> Whenever you are **updating** `State` and you **depend** on the previous `State`. You need to update it by a **Function**.

![[Pasted image 20231009120552.png | Instead updating like this]]
We should now pass in a function
![[Pasted image 20231009120813.png]]
Reacts schedule State updates, doesn't perform them **instantly** so if you schedule a lot of **state updates** at the same time, you could sometime be depending on a ***outdated or incorrect state-snapshot***. However, if you do the approach above (by nesting a function). React will **guarantee** that the `State`snapshot will always be ***the latest***.

###### Exercise - Handle Output Value with State
![[Pasted image 20231010105907.png | Display "Valid message" if the string input's length is more than 3 ]]
```js
const NewExpense = () => {
  const [enteredInput, setEnteredInput] = useState("");
  
  const [message, setMessage] = useState("Waiting for inputs");
  
  const inputHandler = (event) => {
    setEnteredInput(event.target.value);
    if (event.target.value.trim().length >= 3) {
      setMessage("Valid");
    } else {
      setMessage("Invalid");
    }
  }

  // const messageHandler = (event) => {
  //   event.target.value = message
  // }

  
  return (
    <div className="new-expense">
      <ExpenseForm />
      <form>
        <label>Please input a text  </label>
        <input type="text" onChange={inputHandler}/>
        <h4>Entered Input: {enteredInput}</h4> //Render the state
        <p>{message}</p> //Render the state
      </form>
    </div>
  );
};
```


###### Exercise - Update State based on older state
Your task is to build a **basic counter** that should **increment** whenever the "Increment" button is clicked.

Whilst this task allows you to **apply your general knowledge** about event handling and state (which you already practiced quite a bit at this point in the course), there's also **one crucial new aspect**: You should update the state following React **best practices**!
![[Pasted image 20231010113522.png|400]]
Code
```js
const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter( previousCounter => previousCounter + 1);
  };

  return (
    <div className="new-expense">
      <ExpenseForm />
      <br></br>
      <div className="new-expense__actions">
        <button onClick={handleIncrement}>Increment</button>
        <button>{counter}</button>
      </div>
    </div>
  );
```
![[Pasted image 20231010113748.png]]
* `setCounter` is like your remote control to the toy, and `previousCounter`is like a note telling you where the toy is right now.
* `previousCounter`is a parameter name you can choose, it **represents** the previous state of the `counter` variable. 
- The arrow function `(previousCounter => previousCounter + 1)` is used to **calculate the new state value based on the previous state**. It takes the previous state (`previousCounter`), increments it by `1`, and returns the new state value.
- The `setCounter` function is responsible for updating the state with the new value.

##### Create Share Handler Function
Previously, we have too many handler like this
![[Pasted image 20231016103827.png | Too many Handler();]]

We need to find a way to shorten this code => Use **Share Handler Function**

![[Pasted image 20231016105246.png | Group as Identifer]]

Upon return, since we can't pass a function into code [[Tutorial Tik Tac Toe#^096e78]]
we now use **anonymous function** like below:
`() => {}`
![[Pasted image 20231016105312.png | Using an anonymous function]]

## Handling Form Submission
![[Pasted image 20231016111040.png| 400 |Submit]]
We don't need to `onClick()` here since it's not the practical behavior 
We would use `onSubmit()` and manually collecting the data through a function called `submitHandler()`
![[Pasted image 20231016111300.png]]
However, upon submitting, the browser send a request to the server by default. This is *not* what we wanted. To *prevent* this, we use `event.preventDefault();`
![[Pasted image 20231016111622.png | Prevent browser from re-loading and sending submit request]]
![[Pasted image 20231016114031.png]]

[[Implement Double-click to Edit Text in React]]
### Two-way binding

>[!caution]+ Key concept (Working with form)
>Two-way binding allow form to *gather user input* as well as *modify* it

For example, normally, when user hit "Add Expense", it won't clear the input 
![[Pasted image 20231026050929.png | Form field was not clear after user "Add Expense"]]

But with **two-way binding**, we can use the concept to clear input after user hit `Add Expense`

In the example, we will bind a `value` property with `enteredTitle` for the input
![[Pasted image 20231026051458.png]]
*This input don't just listen to changes, but also be able to be fed back the state to the input* -> We **change the state** -> The input value **will also be changed**
![[Pasted image 20231026051703.png | After submit, the input for `title` is changed to "Submitted"]]
![[Pasted image 20231026051734.png]]
With **two-way binding**. Now we can clear the input after the form *is submitted*
![[Pasted image 20231026051929.png | Clear the form post submit]]

### Child-to-parent Component Communication
We have learnt on how to pass the value from Parent to Child component but we hasn't learn the (buttom-up) approach yet


![[Pasted image 20231026053357.png | Passing Data from Child to Parent concept]]
In the example, we need to ultimately pass the `expenseData` to the `App.js`
![[Pasted image 20231026054000.png]]
We will pass `expenseData` (1) which we *gathered* in `ExpenseForm.js` component to the `NewExpense.js` (2) component as the first step. After that, we will try to reach the `App.js`(3) component. However, ***WE CAN'T SKIP COMPONENT IN BETWEEN***

>[!idea] How to pass value to the parent component
>We can use a `callback function`, the parent **defines** a function (within a `Component props`) and *passes* it down to the `Child component` as a **props**. The `Child component` then **call** this function with *the data it wanted to send* -> *The parent* will receive and process that data

==Step 1: Define a props + call back function==
![[Pasted image 20231026060647.png]]
(1) - props
(2) - A call back function which handle *retrieving data from child component*
(3) - **Parameter** - 
![[Pasted image 20231026061117.png]]
(1) - `expenseData` which is an **key-value pair** object, we use the[[Function in JS#^24d21d | Spread Operator]] to append a new set of DATA which has new ID (2) to the old Array

==Step 2: Use this function inside the Component== (Call a function)
![[Pasted image 20231026062207.png]]
===Communicate up to the `App.js` to actually append to the original *array*

## Lifting State Up
![[Pasted image 20231026071512.png]]

### Derived (Computed) State

Supposed we need to view which year has been hidden
![[Pasted image 20231103095529.png|Exmaple Code]]

Normally, we will need to create a whole another state just to control that `<p>`
which is redundant

![[Pasted image 20231103101158.png]]

Here is a better way to do that, by *introducing* a new variable (**Computed** value)

![[Pasted image 20231103101909.png | Using Derived value]]

