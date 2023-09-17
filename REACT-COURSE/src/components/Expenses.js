import "./Expenses.css";
import "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
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
export default Expenses;
