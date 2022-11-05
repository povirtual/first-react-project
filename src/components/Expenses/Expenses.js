import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

const Expenses = function (props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const selectedYearHandler = (year) => setFilteredYear(year);

    const filteredExpenses = props.data.filter(expense => {
        return expense.date.getFullYear() + '' === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter yearSelected={filteredYear} onDateSelected={selectedYearHandler} />
                <ExpensesChart data={filteredExpenses} />
                <ExpensesList data={filteredExpenses} />
            </Card>
        </div>
    );

}
export default Expenses;