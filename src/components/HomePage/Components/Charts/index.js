import React from 'react';
import { Line } from 'react-chartjs-2';
import classes from './charts.module.css';

const data = {
  labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09'],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4df1a1',
      borderColor: '#4df1a1',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#4df1a1',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#4df1a1',
      pointHoverBorderWidth: 2,
      maintainAspectRatio: false,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1000, 1500, 2400, 2800, 1700, 2100, 1300, 1800, 1100]
    },
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#f46069',
      borderColor: '#f46069',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#f46069',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f46069',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [800, 500, 1300, 1700, 1110, 745, 1256, 875, 1000]
    }
  ]
}
const options = {
  responsive: true,
  tooltips: {
    intersect: true,
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false
      },
    }],
    yAxes: [{
      gridLines: {
        borderDash: [5, 8],
        zeroLineBorderDash: [0, 100],
        drawBorder: false,
        tickMarkLength: false,
      },
      ticks: {
        min: 0,
        stepSize: 1000
      },
    }]
  },
  legend: {
    display: false,
  }
}
const line = () => {
  return (
    <div className={classes.chart_Container}>
      <Line data={data}
        options={options} />
    </div>
  )
}
export default line;