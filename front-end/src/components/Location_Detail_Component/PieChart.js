import React from 'react'
import {Pie} from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chartjs-plugin-datalabels'

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = (props) => {
    const data = props.data
    const options = {
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            let sum = 0;
            let dataArr = data.data.datasets[0].data;
            dataArr.map(data => {
              sum += data;
              console.log('hi')
            });
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return percentage;
          },
          color: 'white',
          labels: {
            title: {
              font: {
                size: '16'
              }
            }
          }
        }
      }
    };
    
  return (
    <div>
        <Pie 
          data={data}
          options={options}
          />
    </div>
  )
}

export default PieChart