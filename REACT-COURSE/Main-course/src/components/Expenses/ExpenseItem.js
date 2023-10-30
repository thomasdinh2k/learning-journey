import React, { useState } from "react";
// Inject Styling Style
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // Using dynamic placeholder
  let state = 0;
  const [title, setTitle] = useState(props.title);
  console.log(`ExpenseItem evaluated by React`)
  

  const clickHandler = () => {
    console.log(`Clicked on to ${props.title}`);
    setTitle(`${props.title} | ${state++}`) ;
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
