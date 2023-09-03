import React, { useState } from "react";
import "./components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_items = [
  { id: "e1", date: new Date(2023, 7, 15), title: "차량 수리비", amount: 230000},
  { id: "e2", date: new Date(2023, 7, 11), title: "영화관", amount: 20000 },
  { id: "e3", date: new Date(2023, 4, 5), title: "점심 값", amount: 15000 },
  { id: "e4", date: new Date(2023, 2, 11), title: "축의금", amount: 90000 },
  { id: "e5", date: new Date(2022, 6, 30), title: "과일 구매", amount: 42000 },
  { id: "e6", date: new Date(2022, 3, 30), title: "운동화 구매", amount: 115000 }
];


function App() {
  const [expenses, setExpenses] = useState(dummy_items);

  const addExpenseHandler = (expense) => {
    console.log("in App.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
