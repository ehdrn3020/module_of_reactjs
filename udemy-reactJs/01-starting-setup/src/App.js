import './components/Expenses/Expenses.css'
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from './components/Expenses/Expenses';

function App() {
  const expense = [
    { date: new Date(2023, 7, 15), title: "차량 수리비", amount: 230000 },
    { date: new Date(2023, 7, 11), title: "영화관", amount: 20000 },
    { date: new Date(2023, 7, 5), title: "점심 값", amount: 15000 },
    { date: new Date(2023, 6, 30), title: "차량 유류비", amount: 95000 },
  ];

  return (
    <Expenses expense={expense} />
  );
}

export default App;
