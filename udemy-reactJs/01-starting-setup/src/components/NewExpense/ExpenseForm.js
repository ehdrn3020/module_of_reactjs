import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleCangeHandler = (event) => {
        setUserInput({
            ...userInput, // spread 연산자 사용
            enteredTitle: event.target.value
        })
    };
    const amountCangeHandler = (event) => {
        setUserInput({
            ...userInput, // spread 연산자 사용
            enteredAmount: event.target.value
        })
    };
    const dateCangeHandler = (event) => {
        setUserInput({
            ...userInput, // spread 연산자 사용
            enteredDate: event.target.value
        })
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>타이틀</label>
                    <input type="text" onChange={titleCangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>비용</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountCangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input
                        type="date"
                        min="2023-01-01"
                        max="2023-12-31"
                        onChange={dateCangeHandler}
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
