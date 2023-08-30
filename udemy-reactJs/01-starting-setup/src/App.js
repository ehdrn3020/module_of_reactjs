import React, {useState} from 'react';
import "./components/Expenses/Expenses.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_items = [
    { date: new Date(2023, 7, 15), title: "차량 수리비", amount: 230000 },
    { date: new Date(2023, 7, 11), title: "영화관", amount: 20000 },
    { date: new Date(2023, 7, 5), title: "점심 값", amount: 15000 },
    { date: new Date(2023, 6, 30), title: "차량 유류비", amount: 95000 },
];

function App() {
    const [expenses, setExpenses] = useState(dummy_items);

    const addExpenseHandler = expense => {
        console.log('in App.js');
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        });
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expense={expenses} />
        </div>
    );
}

export default App;
