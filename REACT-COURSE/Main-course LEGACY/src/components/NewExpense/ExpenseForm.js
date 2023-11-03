import { useState } from "react";
import './ExpenseForm.css'


const ExpenseForm = ( props )=> {
  // Uses State to store value
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  // const titleChangeHandler = (event) => {
  //   // setUserInput( (previousState) => {
  //   //     return {...previousState, enteredTitle: event.target.value};
  //   //  });
  //   setEnteredTitle(event.target.value)
  // };

  // const amountChangeHandler = (event) => {
  //   // setUserInput({ ...userInput, enteredAmount: event.target.value });
  //   setEnteredAmount(event.target.value)
  // };

  // const dateChangeHandler = (event) => {
  //   // setUserInput({ ...userInput, enteredDate: event.target.value });
  //   setEnteredDate(event.target.value);
  // };
  // eslint-disable-next-line no-unused-vars
  const inputChangeHandler = (identifier, value) => {
    if (identifier === 'title') {
      setEnteredTitle(value);
    } else if (identifier === 'amount') {
      setEnteredAmount(value);
    } else if (identifier === 'date') {
      setEnteredDate(value);
  }};

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    props.onSaveExpenseData(expenseData);
    // console.log(expenseData);



    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step={0.01}
            value={enteredAmount}
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
