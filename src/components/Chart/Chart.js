import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    const justValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxHeightValue = Math.max(...justValues) > .1 ? Math.max(...justValues) : .1;

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                return <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxHeightValue}
                />
            })}
        </div>
    )
}

export default Chart;