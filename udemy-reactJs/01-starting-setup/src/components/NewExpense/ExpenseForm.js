import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>타이틀</label>
                    <input type="text" />
                </div>
                <div className="new-expense__control">
                    <label>비용</label>
                    <input type="number" min='0.01' step='0.01' />
                </div>
                <div className="new-expense__control">
                    <label>날짜</label>
                    <input type="date" min='2023-01-01' max='2023-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>등록하기</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
