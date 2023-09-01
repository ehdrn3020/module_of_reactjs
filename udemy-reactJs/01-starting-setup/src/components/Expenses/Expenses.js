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

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
