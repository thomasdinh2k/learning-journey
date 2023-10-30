`localStorage` is a web storage API provided by modern web browsers that allows you to store key-value pairs in a client-side, persistent storage. It provides a simple way to store small amounts of data locally, which can be useful for applications that need to remember user preferences, settings, or other data across browser sessions.

```js
// Storing data in localStorage
localStorage.setItem('username', 'john_doe');
localStorage.setItem('theme', 'dark');

// Retrieving data from localStorage
let username = localStorage.getItem('username');
let theme = localStorage.getItem('theme');

// Removing data from localStorage
localStorage.removeItem('theme');

// Clearing all data from localStorage
localStorage.clear();
```

## Save DATA in localStorage

Storing data in localStorage is quite straightforward. You can use the setItem() method provided by the localStorage object to store key-value pairs. The syntax for storing data is as follows:
```js
localStorage.setItem(key, value);
```
* ***key***: A string that represents the name of the key under which the data will be stored. The key is used to later retrieve the data.
* value: A string that represents the data you want to store. If you want to store non-string values like objects or arrays, you'll need to convert them to strings using methods like JSON.stringify();

### Storing non-string DATA
```js
// Storing an object in localStorage
let userObject = {
  username: 'john_doe',
  age: 30,
  isAdmin: false
};

localStorage.setItem('user', JSON.stringify(userObject));

```
Keep in mind that when you retrieve the data, you'll need to parse it back from a JSON string using JSON.parse():
```jsx
// Retrieving and parsing the stored object from localStorage
let storedUser = localStorage.getItem('user');
let parsedUser = JSON.parse(storedUser);

console.log(parsedUser.username); // Output: 'john_doe'

```