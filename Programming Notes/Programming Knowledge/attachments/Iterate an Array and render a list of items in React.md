## Working Array
```js
const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];
```
## Normal code
```js
function Expenses(newProp) {
  return (
    <div>
      <ExpenseItem
        date={newProp.expensesArray[0].date}
        title={newProp.expensesArray[0].title}
        amount={newProp.expensesArray[0].amount}
      />
      <ExpenseItem
        date={newProp.expensesArray[1].date}
        title={newProp.expensesArray[1].title}
        amount={newProp.expensesArray[1].amount}
      />
      <ExpenseItem
        date={newProp.expensesArray[2].date}
        title={newProp.expensesArray[2].title}
        amount={newProp.expensesArray[2].amount}
      />
      <ExpenseItem
        date={newProp.expensesArray[3].date}
        title={newProp.expensesArray[3].title}
        amount={newProp.expensesArray[3].amount}
      />
    </div>
  );
}
export default Expenses;
```
Which is **not efficient** for bigger Array size

We will use **map();** to iterate over the `newProp.expenseArray` ( which contains the list of expenses)
```js
function Expenses(newProp) {
  return (
    <div>
      {newProp.expensesArray.map(function (expense) {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </div>
  );
}
```

## How to use Map();
Syntax
```js
const newArray = array.map(callback(currentValue[, index[, array]])[, thisArg]);
```

^b90b85
- `array`: The original array you want to iterate over.
- `callback`:*A function to execute on each element* of the array. It can take up to three arguments:
    - `currentValue`: The current element being processed in the array.
    - `index` (optional): The index of the current element. ^6cf0ec
    - `array` (optional): The array that `map()` is being called upon.
- `thisArg` (optional): An optional value to use as `this` when executing the `callback` function.

```js
const numbers = [1, 2, 3, 4, 5];

// Example 1: Doubling each number in the array
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Example 2: Converting an array of names to uppercase
const names = ["Alice", "Bob", "Charlie"];
const uppercaseNames = names.map(function (name) {
  return name.toUpperCase();
});
console.log(uppercaseNames); // Output: ["ALICE", "BOB", "CHARLIE"]

```

