[### ****Arrow Functions (.aka Lambda function)****](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_this)
#### Syntax
```js
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
  statements
}

param => {
  statements
}

(param1, paramN) => {
  statements
}
```
```js
(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression

```
```jsx
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// Similiar to Python's lambda
add = lambda a, b: a + b
print(add(2, 3)) # Output: 5
```

>> The parentheses can only be omitted if the function ==has a single simple parameter==
```js
// Traditional anonymous function
(function (a) {
  return a + 100;
});

// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;

```
>> The braces can only be omitted if the function ===directly return an expression=== 
```js
// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};
```


### Arrow Function with parameters

```jsx
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

//Output: 8
```

### Default Parameters Functions

```jsx
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
// The console will display the strings Hello John and Hello Anonymous.

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
```

### ****Use the Spread Operator to Evaluate Arrays In-Place****

In JavaScript, the spread operator (**`...`**) can be used to evaluate arrays in place, allowing you to spread the elements of an array into another array or function call. In Python, a similar functionality can be achieved using the asterisk (**`*`**) operator. Here's an example: ^24d21d

```jsx
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = [...array1, ...array2];

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]
```

```jsx
array1 = [1, 2, 3]
array2 = [4, 5, 6]

combined_array = [*array1, *array2]

print(combined_array) # Output: [1, 2, 3, 4, 5, 6]
```
