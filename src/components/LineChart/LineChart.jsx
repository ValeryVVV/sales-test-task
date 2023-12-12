// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { data } from '../../data/tableInfoData';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             position: 'top',
//         },
//         title: {
//             display: true,
//             text: 'Chart.js Line Chart',
//         },
//     },
// };


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const filteredDress = data.filter(elem => {
//     return elem.productCategory === 'Dress';
// });
// console.log(filteredDress);

// const filteredCoat = data.filter(elem => {
//     return elem.productCategory === 'Coat';
// });

// const filteredSkirt = data.filter(elem => {
//     return elem.productCategory === 'Skirt';
// });




// export const dataMonthlyRevenue = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//         data: filteredDress.map(product => product.unitSold),
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//         {
//       label: 'Dataset 2',
//     data: filteredCoat.map(product => product.unitSold),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       },
//                 {
//       label: 'Dataset 3',
//     data: filteredSkirt.map(product => product.unitSold),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function LineChart() {
//   return <Line options={options} data={dataMonthlyRevenue} />;
// }

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { data } from '../../data/tableInfoData';


const filteredDress = data.filter(elem => {
    return elem.productCategory === 'Dress';
});

const filteredCoat = data.filter(elem => {
    return elem.productCategory === 'Coat';
});

const filteredSkirt = data.filter(elem => {
    return elem.productCategory === 'Skirt';
});

const uData = filteredDress.map(product => product.unitSold);
const pData = filteredCoat.map(product => product.unitSold);
const vData = filteredSkirt.map(product => product.unitSold);
const xLabels = data.map(product => product.date);



export default function BasicLineChart() {
  return (
    <LineChart
      width={900}
      height={400}
      series={[
        { data: pData, label: 'dress' },
        { data: uData, label: 'coat' },
        { data: vData, label: 'skirt' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}

