import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { addExpenseAction } from "store/expense/expense-slice";
import { useState } from "react";


export function ExpenseInput(props) {
  const dispatch = useDispatch();
  const [price, setPrice] = useState();
  const [expenseName, setexpenseName] = useState();

  function submit(e) {
    e.preventDefault();
    dispatch(addExpenseAction({price,name : expenseName}));
   
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            onChange={(e) => {setexpenseName(e.target.value);}}
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            onChange={(e) => {setPrice(e.target.value);}}
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
