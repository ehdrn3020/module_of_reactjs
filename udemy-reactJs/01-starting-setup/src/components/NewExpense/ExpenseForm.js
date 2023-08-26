import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === 'amount') {
            setEnteredTitle(value);
        } else {
            setEnteredDate(value);
        }
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>타이틀</label>
                    <input type="text" onChange={(event)=>{ inputChangeHandler('title', event.target.value) }} />
                </div>
                <div className="new-expense__control">
                    <label>비용</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(event)=>{ inputChangeHandler('amount', event.target.value) }}
                    />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input
                        type="date"
                        min="2023-01-01"
                        max="2023-12-31"
                        onChange={(event)=>{ inputChangeHandler('date', event.target.value) }}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">등록하기</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
