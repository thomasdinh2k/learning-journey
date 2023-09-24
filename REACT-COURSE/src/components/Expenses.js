import "./Expenses.css";
import "./ExpenseDate";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
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
    <Card className="expenses">
      {newProp.expensesArray.map(function (item) {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;