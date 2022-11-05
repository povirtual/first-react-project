import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const [showForm, setShowForm] = useState(false);
    const showFormTrue = () => setShowForm(true);
    const showFormFalse = () => setShowForm(false);

    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormTrue}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelForm={showFormFalse} />}
        </div>
    )
}

export default NewExpense;