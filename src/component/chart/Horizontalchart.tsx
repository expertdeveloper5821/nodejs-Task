import React, { useEffect, useState } from 'react';
import './HorozontalChart.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { saveAs } from 'file-saver';


// Import the zoom plugin from 'chartjs-plugin-zoom'
import zoomPlugin from "chartjs-plugin-zoom";
import { environmentConfig } from '../../config/environmentConfig';

// Register the necessary components and the zoom plugin with ChartJS
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, zoomPlugin);

// Configure the chart options
const options: any = {
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
    zoom: {
      zoom: {
        wheel: {
          enabled: true // Enable zooming with the mouse wheel
        },
        mode: "xy", // Allow both X and Y axis zooming
        speed: 100, // Adjust the zoom speed (optional)
      },
      pan: {
        enabled: true, // Enable panning
        mode: "xy", // Allow both X and Y axis panning
        speed: 100, // Adjust the panning speed (optional)
      },
    },
  },
};

const Horizontalchart: React.FC = () => {
  const [ data, setData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  }>({
    // Adding labels and Datasets 
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(25, 90, 13, 0.5)',
      },
    ],
  });

  useEffect(() => {
    // function to call the API and getting the data
    const fetchData = async () => {
      // const baseUrl: string = (process.env.REACT_APP_BASE_URL as string);
      const endPoint = 'v1/data'
      const url = `${environmentConfig.REACT_APP_API_URL}/${endPoint}`;
      const dataSet1: number[] = [];
      try {
        const response = await fetch(url);
        const res = await response.json();
        for (const val of res) {
          dataSet1.push(val.value);
        }
        setData({
          labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          datasets: [
            {
              label: 'Dataset ID',
              data: dataSet1,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(99, 132, 0.5)',
            },
          ],
        });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

// Function to download CSV File
  const handleExportCSV = () => {
    const csvContent = [
      ['Day', 'Value'],
      ...data.labels.map((day, index) => [day, data.datasets[0].data[index]])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    // setting the name of the file to be downloaded as chart_data.csv
    saveAs(blob, 'chart_data.csv');
  };

  return (
    <div  className='container'>
      <Bar data={data} options={options} />
      <button
        onClick={handleExportCSV}
        className='btn'>
        Export CSV
      </button>
    </div>
  );
};

export default Horizontalchart;



