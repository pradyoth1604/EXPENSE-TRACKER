import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const income = useSelector((store) =>store.EXPENSE.income);
  const expenseList = useSelector((store)=>store.EXPENSE.expenseList)
  const TotalExpense=expenseList.reduce((accumualtor,currExpense)=>{
    return Number.parseFloat(accumualtor)+Number.parseFloat(currExpense.price)
  },0)
  
  const Remaining_money=(income-TotalExpense)

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{TotalExpense} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{Remaining_money} $</div>
      </div>
    </div>
  );
}
