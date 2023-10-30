To access the properties of the contact objects in the `contacts` array, you can use dot notation or bracket notation. Here are examples of both approaches:

- Dot notation: You can use dot notation to access the properties directly by specifying the property name after the object variable name. Here's an example:**

```js
console.log(contacts[0].firstName); // Output: "Akira"
console.log(contacts[1].lastName); // Output: "Potter"
console.log(contacts[2].number); // Output: "0487345643"
console.log(contacts[3].likes); // Output: ["JavaScript", "Gaming", "Foxes"]

```

* Bracket notation: You can also use bracket notation to access the properties by using a string containing the property name inside square brackets. Here's an example:**

```javascript
console.log(contacts[0]['firstName']); // Output: "Akira"
console.log(contacts[1]['lastName']); // Output: "Potter"
console.log(contacts[2]['number']); // Output: "0487345643"
console.log(contacts[3]['likes']); // Output: ["JavaScript", "Gaming", "Foxes"]

```

Both dot notation and bracket notation will allow you to **access the properties** of the contact objects in the `contacts` array.
```js
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
