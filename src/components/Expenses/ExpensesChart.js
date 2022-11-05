import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const expensesByDate = [
        { label: 'jan', value: 0 },
        { label: 'fev', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'may', value: 0 },
        { label: 'jun', value: 0 },
        { label: 'jul', value: 0 },
        { label: 'aug', value: 0 },
        { label: 'sep', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 }
    ];

    for (const exp of props.data) {
        expensesByDate[exp.date.getMonth()].value += exp.amount;
    }

    return <Chart dataPoints={expensesByDate} />
}

export default ExpensesChart;