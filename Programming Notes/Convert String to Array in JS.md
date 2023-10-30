You can convert a string to an array in JavaScript by using the ==`split()`== method. The `split()` method splits a string into an array of substrings based on a specified delimiter or regular expression. If you don't specify a delimiter, it will split the string into an array of individual characters.


```js
// Separate by letter
const str = "Hello, World!";
const arr = str.split(""); // Split the string into an array of individual characters

console.log(arr); // Output: ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]

// Separate by word
const sentence = "This is a sample sentence.";
const words = sentence.split(" "); // Split the string into an array of words

console.log(words); // Output: ["This", "is", "a", "sample", "sentence."]
```
