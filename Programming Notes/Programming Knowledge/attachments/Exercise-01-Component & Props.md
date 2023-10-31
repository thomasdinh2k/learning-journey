

- [x] Create a component to render all the components of expense item
- [x] Add multiple ExpenseItem components in that component
- [x] Keep the expense data in App component and pass the data into newly created ones

Expenses component should also wraps all expenses items by a div (className = "expenses")

## ExpenseItem;
```js
function ExpenseItem(props) {
  // Using dynamic placeholder
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```
## App.js
```js
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 11, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      {/* // Example of imported components */}
      <div className="expenses">
        <Expenses
          // Pass the expenses array as proof
          expensesArray = {expenses}
        />
      </div>
    </div>
  );
}

export default App;
```
## Expenses.js (New)
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