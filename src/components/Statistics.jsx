import { useState } from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Statistics() {
  const [wasteData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Plastic',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Paper',
        data: [28, 48, 40, 19, 86, 27],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Glass',
        data: [30, 45, 35, 60, 40, 70],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
    ],
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Waste Collection by Type',
      },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Waste Statistics</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <Bar data={wasteData} options={options} />
          </div>
        </div>
      </main>
    </div>
  );
}

