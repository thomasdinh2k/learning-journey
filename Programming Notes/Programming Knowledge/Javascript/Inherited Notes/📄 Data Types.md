![JavaScript DataTypes](https://usemynotes.com/wp-content/uploads/2021/04/Types-of-data-types-in-JS.jpg)

## Primitive Value
Without assignment, it will automatically re-assign as [[Undefined]] value (as default value)
![[attachments/Pasted image 20230905041335.png]]
### Array (Mảng)
> Array is similar to list in Python
```js
// Creating an array of strings 
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
```
#### Common Method()
Array length
Array toString() = converts an array to a string of (comma separated) array values.
[[Array pop(); remove and return the last element from an array.]]
Array.splice(index, valueQuantity): Remove items out of an array
Array push(): Add value to the end of array
[[Array shift(); removes the first array element and "shifts" all other elements to a lower index.]]
Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
[[array.Join();]]
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
The hasOwnProperty() method is a built-in method in JavaScript that allows you to check if an object has a specific property.
[[../../Miscellaneous/Looping through items in an array]]
[[../../Miscellaneous/array.Filter();]]
[[../../Miscellaneous/array.Map();]]
### Object
==You ***can not*** have duplicate keys== in an object. If you try to add multiple properties with the same key to an object, the latter assignment will ==overwrite== the previous one, and you will end up with **only one property** with that key
```js
// Creating an object to represent a person
let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isStudent: false,
  address: {
    street: '123 Main St',
    city: 'Exampleville',
    country: 'USA'
  },
  hobbies: ['reading', 'swimming', 'gardening']
};

// Create an object with product IDs as keys and shipping prices as values
const shippingPrices = {
  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6232": 5.99,
  "8a4f2f7d-3e75-4ca0-ae9f-72a1d3ac2f0d": 3.49,
  "f2a9b694-72e3-4f01-97be-1d14ed4e7dca": 2.99,
  "d23e4f65-9a12-4923-b8fe-0e4ac049c0ab": 4.99,
  "c2e31a4d-2e48-45b0-8c86-7abf32c7ef32": 6.99
};


// Accessing object properties
console.log(person.firstName); // Output: 'John'
console.log(person.age);       // Output: 30
console.log(person.address.city); // Output: 'Exampleville'
console.log(person.hobbies[1]);   // Output: 'swimming'
```

#### Access properties in an Object
[[../../Miscellaneous/Access properties in an object?]]
#### Add new key-value pair to an Object
```js
// Existing object
const shippingPrices = {
  "e43638ce-6aa0-4b85-b27f-e1d07eb678c6232": 5.99,
  "8a4f2f7d-3e75-4ca0-ae9f-72a1d3ac2f0d": 3.49,
  "f2a9b694-72e3-4f01-97be-1d14ed4e7dca": 2.99,
  "d23e4f65-9a12-4923-b8fe-0e4ac049c0ab": 4.99,
  "c2e31a4d-2e48-45b0-8c86-7abf32c7ef32": 6.99
};

// Adding more key-value pairs
shippingPrices["6d2a7b1f-8be5-45d7-b937-4a98f79c635c"] = 7.99;
shippingPrices["9a85f6d3-8d7c-4876-a9e0-8f3b6a218d02"] = 8.49;

// Accessing values for the new product IDs
console.log(shippingPrices["6d2a7b1f-8be5-45d7-b937-4a98f79c635c"]); // 7.99
console.log(shippingPrices["9a85f6d3-8d7c-4876-a9e0-8f3b6a218d02"]); // 8.49

```
[[../../Miscellaneous/How to add a new key or key-value pair to an object?]]
#### Object method
Objects.freeze();

[[../../Miscellaneous/Destructuring in JavaScript]]
### String
- **`String.length();`**
- **`String.concat( );`** used to concatenate one or more strings and return a new string.
- **`charAt()`** and **`charCodeAt()`**: retrieve the character at a specific index in the string and its Unicode value.
- **`substring()`** and **`slice()`**: extract a portion of a string based on specified indices.
- **`indexOf()`** and **`lastIndexOf()`**:  find the first and last occurrences of a substring in a string.
- **`toUpperCase()`** and **`toLowerCase()`**: These methods change the case of a string.
- **`trim()`**: This method removes whitespace from both ends of a string.
- **`slice()`** :  Create a new string that excludes the last character of the original string
#### [[Convert String to Array in JS]]
- **`split()`**: This method splits a string into an array of substrings based on a specified separator.
- `String.repeat(count: number): string.` Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
### Number
- **`toFixed()`**: Converts a number to a string, rounding it to a specified number of decimal places.
- **`parseFloat()`** and **`parseInt()`**: Parse a string and convert it to a floating-point number (`parseFloat()`) or an integer (`parseInt()`).
#### Math Methods
- **`Math.abs()`**: Returns the absolute value of a number.
- **`Math.ceil()`** and **`Math.floor()`**: Round a number up or down to the nearest integer.
- **`Math.round()`**: Rounds a number to the nearest integer.
- **`Math.min()`** and **`Math.max()`**: Returns the minimum and maximum values from a list of numbers.
- **`Math.random()`**: [[Math.Random(); Generates a random floating-point number between 0 (inclusive) and 1 (exclusive)]]
### Boolean
### Empty types
#### Null
#### Undefined

### String
[[Inherited Notes/How to convert String to Number in Js]]

## Non-primitive Value
> Is the value which is inherit from Object class