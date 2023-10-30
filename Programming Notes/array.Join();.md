Array join(): convert an array of strings or values into a single string representation
```js
const resultString = array.join(separator);

// Joining Array Elements with a Comma Separator (Default):
const fruits = ["apple", "banana", "cherry"];
const joinedString = fruits.join();

console.log(joinedString); // Output: "apple,banana,cherry"

// Joining Array Elements with a Custom Separator
const colors = ["red", "green", "blue"];
const joinedString = colors.join(" | ");

console.log(joinedString); // Output: "red | green | blue"

// Joining Array Elements with No Separator
const numbers = [1, 2, 3, 4, 5];
const joinedString = numbers.join("");

console.log(joinedString); // Output: "12345"
```