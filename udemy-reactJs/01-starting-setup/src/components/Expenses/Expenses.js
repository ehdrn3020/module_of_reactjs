import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2023");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesListText = <p className="list-text">표시할 내용이 없습니다.</p>;
  if (filteredExpenses.length > 0) {
    expensesListText = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesListText}
      </Card>
    </div>
  );
}

export default Expenses;
