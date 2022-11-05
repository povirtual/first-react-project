import './ExpenseDate.css';

const ExpenseDate = function (props) {
    const day = props.date.toLocaleDateString('pt-PT', { day: '2-digit' });
    const month = props.date.toLocaleDateString('pt-PT', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate;