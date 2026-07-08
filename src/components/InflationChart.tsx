"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#fef3c7', // amber-100
        font: { family: 'inherit', size: 14 }
      }
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      titleColor: '#fcd34d',
      bodyColor: '#fff',
      padding: 12,
      cornerRadius: 8,
    }
  },
  scales: {
    y: {
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
      ticks: {
        color: '#d1d5db',
      }
    },
    x: {
      grid: {
        color: 'rgba(255,255,255,0.1)',
      },
      ticks: {
        color: '#d1d5db',
      }
    }
  }
};

const labels = ['2019', '2020', '2021', '2022', '2023', '2024'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Global Inflation Rate (%)',
      data: [3.5, 3.2, 4.7, 8.7, 6.8, 5.9],
      borderColor: '#f59e0b', // amber-500
      backgroundColor: 'rgba(245, 158, 11, 0.2)',
      tension: 0.4,
      pointBackgroundColor: '#f59e0b',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#f59e0b',
      pointRadius: 4,
      pointHoverRadius: 6,
    }
  ],
};

export default function InflationChart() {
  return <Line options={options} data={data} />;
}
