import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { date: new Date(2023, 7, 15), title: "차량 수리비", amount: 230000 },
    { date: new Date(2023, 7, 11), title: "영화관", amount: 20000 },
    { date: new Date(2023, 7, 5), title: "점심 값", amount: 15000 },
    { date: new Date(2023, 6, 30), title: "차량 유류비", amount: 95000 },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={expense[1].date}
        title={expense[1].title}
        amount={expense[1].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
