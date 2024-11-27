import  { useState } from 'react';
import {  FaTrash, FaRecycle, FaLeaf } from 'react-icons/fa';

function SchedulePickup() {
  const [date, setDate] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the scheduling here
    alert(`Pickup scheduled for ${date} for ${amount} of ${wasteType}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Schedule a Waste Pickup</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            Pickup Date
          </label>
          <div className="relative">
            <input
              type="date"
              id="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-2">
            Waste Type
          </label>
          <div className="relative">
            <select
              id="wasteType"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary appearance-none cursor-pointer"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              required
            >
              <option value="">Select waste type</option>
              <option value="General">General Waste</option>
              <option value="Recyclable">Recyclable</option>
              <option value="Organic">Organic Waste</option>
            </select>
            {wasteType === 'General' && <FaTrash className="absolute right-3 top-3 text-gray-400" />}
            {wasteType === 'Recyclable' && <FaRecycle className="absolute right-3 top-3 text-gray-400" />}
            {wasteType === 'Organic' && <FaLeaf className="absolute right-3 top-3 text-gray-400" />}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Amount (in kg)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-green-600">
          Schedule Pickup
        </button>
      </form>
    </div>
  );
}

export default SchedulePickup;

