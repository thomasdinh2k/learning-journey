# Javascript `fas:Js`

### Variable
[[Declare Variables in Js]]
### **Data type**
[[Inherited Notes/📄 Data Types]]

Array = [ ].  Similar to list

Object = { }

- Access properties in an object?
    
    To access the properties of the contact objects in the `contacts` array, you can use dot notation or bracket notation. Here are examples of both approaches:
    
    1. **Dot notation: You can use dot notation to access the properties directly by specifying the property name after the object variable name. Here's an example:**
    
    ```
    console.log(contacts[0].firstName); // Output: "Akira"
    console.log(contacts[1].lastName); // Output: "Potter"
    console.log(contacts[2].number); // Output: "0487345643"
    console.log(contacts[3].likes); // Output: ["JavaScript", "Gaming", "Foxes"]
    
    ```
    
    1. **Bracket notation: You can also use bracket notation to access the properties by using a string containing the property name inside square brackets. Here's an example:**
    
    ```
    console.log(contacts[0]['firstName']); // Output: "Akira"
    console.log(contacts[1]['lastName']); // Output: "Potter"
    console.log(contacts[2]['number']); // Output: "0487345643"
    console.log(contacts[3]['likes']); // Output: ["JavaScript", "Gaming", "Foxes"]
    
    ```
    
    Both dot notation and bracket notation will allow you to access the properties of the contact objects in the `contacts` array.
     ^8a0587

i.e 

```jsx
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
];

//firstName, lastName, number, etc. are called: Properties
```

#### Array

| Array Common Method()
Array length

Array toString() = converts an array to a string of (comma separated) array values.
Array pop(): Popping items out of an array
Array.splice(index, valueQuantity): Remove items out of an array
Array push(): Add value to the end of array
Array shift()
removes the first array element and "shifts" all other elements to a lower index.
Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
 | Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice() |
| --- | --- |
| The hasOwnProperty() method is a built-in method in JavaScript that allows you to check if an object has a specific property. |  |

##### Loop through items in an array
```jsx
[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value) {
    addLog(` I ${value}`);
})
```
Another way to do that
[[2023-09-18#Query giá trị trong mảng]]


##### array.Filter();

```jsx
let testArray = [8,1, -3, -5].filter((value, index) => {
    if (value < 0) {
        return false
    } else {
        return true;
    }
});

Output: [8, 1]

let testArray = [8,1, -3, -5].filter((value, index) => {
    return value > 0;
});

```

array.Map();
[[Iterate an Array and render a list of items in React]]
```jsx
console.log(testArray);

let testMapArray = [1, 1, 3].map((value, index) => {
    return value * 2;
});

let testMapArray = [1, 1, 3].map(value => value * 2);

Output: [2, 2, 6]
```
##### Array Function
JavaScript array functions like map() , filter() , reduce()  etc.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
###### Map();
[[2023-09-18#Map();]]
###### Filter();
[[2023-09-18#Filter();]]
###### Reduce();
[[2023-09-18#Reduce();]]

#### Spread Operator
Allows you to ===pull elements out of an array=== 
```js
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
```

Spread Operator in an Object ^da9188
```js
const oldObject = {
    name: 'Max'
};
const newObject = {
    ...oldObject,
    age: 28
};

// newObject now will be: 
{
    name: 'Max',
    age: 28
}
```

### Program Structure
#### Breaking out of a loop (switch)
The switch will continue executing, even across other labels, until it reaches a break statement
```js
function getPlanetName(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury';
            break;           // The switch will continue executing, even across other labels, until it reaches a break statemnet
          case 2:
            name = 'Venus';
            break;
          case 3:
            name = 'Earth';
            break;
          case 4:
            name = 'Mars';
            break;
          case 5:
            name = 'Jupiter';
            break;
          case 6:
            name = 'Saturn';
            break;
          case 7:
            name = 'Uranus';
            break;
          case 8:
            name = 'Neptune';
            break;
        }
        
        return name;
      }
```
```js
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
```
## 📦 Object

### Object Method

You cannot have duplicate keys in an object. If you try to add multiple properties with the same key to an object, the latter assignment will overwrite the previous one, and you will end up with only one property with that key

| Object Methods

Objects.freeze: Prevent data from mutation (change) |  |
| --- | --- |
| delete obect.value: Delete a property |  |
|  |  |
|  |  |
|  |  |

Add a new key or key-value pair to an object

*********************************************************Using Dot notation:*********************************************************

```jsx
const myObj = {}; // Empty object

// Adding a new key-value pair using dot notation
myObj.newKey = 'newValue';

console.log(myObj); // Output: { newKey: 'newValue' }
```

***************************Using Square Bracket***************************

```jsx
const myObj = {}; // Empty object

// Adding a new key-value pair using square bracket notation
myObj['newKey'] = 'newValue';

console.log(myObj); // Output: { newKey: 'newValue' }
```

#### Spread Operator in an object
[[#^da9188 | Spread Operator in an Object]]

### Window Object

Represents the browser
### ****Use Destructuring Assignment to Extract Values from Objects (.aka Python package unpacking)****
Destructuring allows you to ==easily access the values of arrays or objects== and ==assign them to variables==
```jsx
// JavaScript
const person = { name: 'John', age: 30, city: 'New York' };

const { name, age, city } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30
console.log(city); // Output: 'New York'

// Python
person = {'name': 'John', 'age': 30, 'city': 'New York'}

name, age, city = person.values()

print(name)  # Output: 'John'
print(age)  # Output: 30
print(city)  # Output: 'New York'
```

### ****Use Destructuring Assignment to Assign Variables from Nested Objects****

```jsx
//JavaScript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: {age: HIS_AGE, email: HIS_EMAIL}} = user

//Python
person = {
  'name': 'John',
  'age': 30,
  'city': 'New York',
  'address': {
    'street': '123 Main St',
    'zip': '10001'
  }
}

name = person['name']
age = person['age']
city = person['city']
street = person['address']['street']
zip_code = person['address']['zip']
```

### ****JSON (JavaScript Object Notation):****

JSON data is represented as key-value pairs, where keys are strings, and values can be strings, numbers, boolean values, arrays, or other JSON objects. JSON objects are enclosed in curly braces **`{}`** and arrays are enclosed in square brackets **`[]`**.

Example

```jsx
{
  "name": "John Doe",
  "age": 30,
  "email": "john.doe@example.com",
  "isSubscribed": true,
  "hobbies": ["reading", "coding", "gaming"],
  "address": {
    "city": "New York",
    "country": "USA"
  }
}
```

```jsx
// Parsing JSON string to JavaScript object
const jsonString = '{"name": "John", "age": 25}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John

// Converting JavaScript object to JSON string
const personObject = { name: "Jane", age: 30 };
const jsonString = JSON.stringify(personObject);

console.log(jsonString); // Output: {"name":"Jane","age":30}

```

### ****localStorage****
[[APIs/localStorage|localStorage]]


# 📋 DOM Interfaces

[[Inherited Notes/📋 DOM]]]
### Method

| .title | Title of the top of the tab |
| --- | --- |
| .body | Create a body inside js |
| .querySelector(’string’); | get any element on the page to put inside JavaScript |
### .querySelector();
The getElementById() Method

The getElementsByTagName() Method

The getElementsByClassName() Method
## Event
### Input Event

# ❓Booleans

## Ternary Operator 

```js
true ? 'truthy' : 'false'
```

## Short-circuiting
1. Using `&&` to perform an action if a condition is met
```js
condition && doSomething();

//Example-1
const isLoggedIn = true;

isLoggedIn && console.log("User is logged in");
// The message is only logged if isLoggedIn is true.


//Example-2
const user = {
  profile: {
    name: "John",
    age: 30,
  },
};

const userName = user && user.profile && user.profile.name;
// userName will be "John" or undefined if any part of the chain is missing.

```
2. Using a ternary conditional for more complex branching:
```js
const result = condition ? 'Condition is true' : 'Condition is false';
//Example-1

const age = 17;
const message = age >= 18 ? "You can vote" : "You cannot vote";
```
3. If value is Non, null then choose other value:
```js
const username = "";
const displayName = username || "Guest";
// If username is empty, displayName is set to "Guest."

//Example-2
function greet(name) {
  name = name || "Friend";
  console.log(`Hello, ${name}!`);
}

greet(); // Outputs: "Hello, Friend!"
```
# 🔁 Loop

### For loop

The `for` statement creates a loop with 3 optional expressions:

for (*expression 1*; *expression 2*; *expression 3*) {  // *code block to be executed*}

**Expression 1** is executed (one time) before the execution of the code block.

**Expression 2** defines the condition for executing the code block.

**Expression 3** is executed (every time) after the code block has been executed.

**Do while…loop**

```jsx
const ourArray = [];

let i = 0;

do {

ourArray.push(i);

i++;

} while (i < 5);
```

### Recursion

```jsx
// Pseudo code for Recursion
function proceessDoll(doll) {
    // 1) Base case
    if ("We've found the piece of chocolate") {
        return "Yum Yum";
    }
    // 2) Recursive call to itself (when the base case failed)
    else if (there are no more dolls) {
        return "No more chocolate here :(";
    }
    else {
        proceessDoll(the smaller doll);
    }
}
// Factorial = n * n-1
function factorial(number) 
{
    if ( number == 1 || number == 0)
        return 1
    else
        return number * factorial(number - 1)
}

console.log(factorial(4))
```

# 📝String

### ****Create Strings using Template Literals****

```jsx
// Javascript
const name = "John";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`; /* Use backticks */
console.log(message);

// Python
name = "John"
age = 25

message = f"My name is {name} and I am {age} years old."
print(message)
```

Convert string to number: Number();

Conver number to string: String();

### Formatting String Method

- Number Localization

It's used to format numeric values according to a specific locale's conventions for displaying numbers, including things like digit grouping (using commas), decimal separators, and other formatting rules

```jsx
const numericValue = 1324;
const formattedValue = numericValue.toLocaleString();
console.log(formattedValue);  // Output: "1,324"
```

- Handle float number

```jsx
const numericValue = 1324;
const formattedValue = numericValue.toFixed(2); // Output: "1324.00"
```

It's used to format a floating-point number with a specified number of decimal places. It doesn't directly handle digit grouping with commas.

### Math in Javascript
|   |   |   |   |
|---|---|---|---|
|**STT**|**Phương Thức**|**Chức Năng**|**Ví Dụ**|
|**1**|Math.round(x)|Làm tròn|Math.round(5.6) = 6|
|**2**|Math.floor(x)|Làm tròn xuống|Math.round(4.5) = 4|
|**3**|Math.random()|Lấy số ngẫu nhiên 0 < x < 1|Math.round(x) = 0.73…|
|**4**|Math.max(x,y,z,…N)|Lấy số có giá trị lớn nhất trong chuỗi số|Math.max(1,5,3,7) = 7|
|**5**|Math.min(x,y,z,…N)|Lấy số có giá trị nhỏ nhất trong chuỗi số|Math.max(1,5,3,7) = 1|
|**6**|Math.abs(x)|Trả về giá trị số dương|Math.abs(-9.5) = 9.5|
|**7**|Math.PI|Hằng số PI|Math.PI = 3.14…|
|**8**|Math.sqrt(x)|Lấy căn bậc 2 của một số|Math.abs(9) = 3|

# Function in Js.

[[Inherited Notes/Function in JS]]
# ⚙ OOP Programming

### “Class” Syntax

```jsx
class Person {
  constructor(name, age) { // Constructor method invoke new keyword
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age}`)

  }
}

const john = new Person('John', 25);
const thomas = new Person('Thomas', 23);
john.sayHello()
thomas.sayHello();
```

### Getters and Setters

- Getter: Retrieve the value of a property
- Setter: Modify value of a property

```jsx
class Book {
  constructor(author) {
    this._author = author; //_author is a private property
  }

// getter (Accessing the _author property)
  get writer() {
    return this._author;
  }
// setter (Update, modifying the _author property)
  get setter() {
    this._author = updateAuthor;
  }
}

const novel = new Book('anonymous');
console.log(novel.writer);
const novel_2 = new Book('anonymous doubled');
console.log(novel_2.writer)

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter)
console.log(circle.area)
```

# 🍥 Regex

The **`.test()`** method returns a boolean value (**`true`** or **`false`**) indicating whether the pattern matches the string. It searches for the pattern within the string and returns **`true`** if a match is found, or **`false`** otherwise.

```jsx
const pattern = /hello/;
const string1 = 'hello world';
const string2 = 'goodbye';

console.log(pattern.test(string1));  // Output: true
console.log(pattern.test(string2));  // Output: false
```

### ****Match a Literal String with Different Possibilities****

Use “ | “ 

### Regex Flag

i : ignore case

### ****Extract Matches****

.match()

```jsx
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

```

### N*egated character sets*

### Deal with Float in Js

```jsx
document.querySelector(".js-total")
                .innerHTML = `$${String(parseFloat(inputValue).toPrecision(4))}`;
```

EVENT LISTENER

```jsx
function handleKeyDown(event) {
  if (event.key === 'Enter') {
    // If Enter key is pressed, call the todoAction function
    todoAction();
  }
}
```

# 🧩 Module

[JavaScript Modules](https://www.w3schools.com/js/js_modules.asp)

JavaScript modules allow you to break up your code into separate files.

This makes it easier to maintain a code-base.

Modules are imported from external files with the `import` statement.

Modules also rely on `type="module"` in the <script> tag.

### ⚠️ Note:

1. Put all imports at the top of file.
2. We need to use Live Server (in order for modules to work)

### Benefits of using module:

1. Avoid naming conflics
2. No need to worry about the order of loading script files (for bigger projects)

### Named export

In-line individually:

```jsx
export const name = "Jesse";
export const age = 40;
```

All at once:

```jsx
const name = "Jesse";
const age = 40;

export {name, age};
```

### Default Export

You can only have one default export in a file.

```jsx
const message = () => {
const name = "Jesse";
const age = 40;
return name + ' is ' + age + 'years old.';
};

export default message;
```

### Import

You can import modules into a file in two ways, based on if they are named exports or default exports.

**Import from named exports**

```jsx
import { name, age } from "./person.js";
```

**Import from default exports**

```jsx
import message from "./message.js";
```

# Data Attribute

![Untitled](Javascript%20f5f1ca43a2e24b3391f9127544c5a044/Untitled.png)

```jsx
<button class="add-to-cart-button button-primary js-add-to-cart data-product-name="${products.name}"">
      Add to Cart
</button>
```

## Method

### setInterval();

The `setInterval()` method calls a function at specified intervals (in milliseconds).

The `setInterval()` method continues calling the function until `clearInterval()` is called, or the window is closed.

![Untitled](Javascript%20f5f1ca43a2e24b3391f9127544c5a044/Untitled%201.png)

### setTimeout();

The `setTimeout()` method calls a function after a number of milliseconds.

1 second = 1000 milliseconds.

![Untitled](Javascript%20f5f1ca43a2e24b3391f9127544c5a044/Untitled%202.png)