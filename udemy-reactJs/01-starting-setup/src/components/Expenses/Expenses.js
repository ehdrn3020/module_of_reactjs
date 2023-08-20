import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    return (
        <Card className="expenses">
          {props.expense.map((item) => (
            <ExpenseItem date={item.date} title={item.title} amount={item.amount} />
          ))}
        </Card>
    );
}

export default Expenses;