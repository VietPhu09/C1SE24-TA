import React, {useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, getElementAtEvent } from 'react-chartjs-2';
  import "chartjs-plugin-datalabels";



  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  

const BarChart = (props) => {

  const navigate = useNavigate()

  const chartRef = useRef();
  const onClick = (event) => {
    try
    {
    props.data.datasets[0].data.map((value, index) => {
      if(getElementAtEvent(chartRef.current, event)[0].index === index)
        {
          props.id.map((id, id_index) => {
            if (index === id_index)
            {
              console.log('value', value, 'id', id, 'index', id_index)
              navigate(`/detail/${id}`)
            }             
          })
        }      
        window.scrollTo({top:'0', behavior: 'smooth'})
    })
  } 
  catch(err)
  {
    console.error(err)
  }      
}

  

  const total = props.total
    const backgroundColor = props.data.datasets[0].data.map((value) => {
        if (((value / total)*100).toFixed(2) > 40) {
          return 'rgba(75, 192, 192, 1)'; 
        } else {
          return 'rgb(238, 108, 77, 1)'; 
        }
      });

      const compareBackgroundColor = props.data.labels.map((name) => {
        if(name === props.name) {
          return '#EC932F'; 
        } else {
          return 'rgb(23, 161, 205, 1)'; 
        }
      })
      if(props.total)
        props.data.datasets[0].backgroundColor = backgroundColor;
      if(props.name)
        props.data.datasets[0].backgroundColor = compareBackgroundColor;
  return (
    <Bar 
        ref={chartRef}
        data={props.data}
        options={props.options} 
        onClick={onClick}
    />
  )
}

export default BarChart