import React, { useState } from "react";
import "./Expenses.css";
import "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
// import "../App";

// function Expenses(newProp) {
//   return (
//     <div>
//       <ExpenseItem
//         date={newProp.expensesArray[0].date}
//         title={newProp.expensesArray[0].title}
//         amount={newProp.expensesArray[0].amount}
//       />
//       <ExpenseItem
//         date={newProp.expensesArray[1].date}
//         title={newProp.expensesArray[1].title}
//         amount={newProp.expensesArray[1].amount}
//       />
//       <ExpenseItem
//         date={newProp.expensesArray[2].date}
//         title={newProp.expensesArray[2].title}
//         amount={newProp.expensesArray[2].amount}
//       />
//       <ExpenseItem
//         date={newProp.expensesArray[3].date}
//         title={newProp.expensesArray[3].title}
//         amount={newProp.expensesArray[3].amount}
//       />
//     </div>
//   );
// }

function Expenses(newProp) {
  const [filteredYear, setFilteredYear] = useState(2020);

  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <h5>Year chosen: {filteredYear}</h5>
      <Card className="expenses">
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
        {newProp.expensesArray.map(function (item) {
          return (
            <div>
              <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}
export default Expenses;
