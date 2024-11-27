import { useState } from 'react';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { FaLeaf, FaRecycle, FaWater } from 'react-icons/fa';

export default function EcoTips() {
  const [tips] = useState([
    { id: 1, title: 'Reduce Single-Use Plastics', icon: FaLeaf, content: 'Bring your own reusable bags, water bottles, and coffee cups to reduce plastic waste.' },
    { id: 2, title: 'Proper Recycling Techniques', icon: FaRecycle, content: 'Learn which materials can be recycled in your area and how to prepare them properly.' },
    { id: 3, title: 'Conserve Water', icon: FaWater, content: 'Fix leaks, take shorter showers, and collect rainwater for plants to reduce water waste.' },
  ]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Eco-Friendly Tips</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <tip.icon className="text-4xl text-primary mr-4" />
                  <h3 className="text-xl font-semibold">{tip.title}</h3>
                </div>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

