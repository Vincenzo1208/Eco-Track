import { useState } from 'react';
import { FaMapMarkerAlt, FaCamera, FaTrash } from 'react-icons/fa';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

export default function ReportWaste() {
  const [location, setLocation] = useState('');
  const [wasteType, setWasteType] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Report submitted:', { location, wasteType, description, image });
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Report Waste</h1>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                <FaMapMarkerAlt className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="wasteType" className="block text-sm font-medium text-gray-700 mb-2">
                Waste Type
              </label>
              <div className="relative">
                <select
                  id="wasteType"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  value={wasteType}
                  onChange={(e) => setWasteType(e.target.value)}
                  required
                >
                  <option value="">Select waste type</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Paper">Paper</option>
                  <option value="Glass">Glass</option>
                  <option value="Metal">Metal</option>
                  <option value="Organic">Organic</option>
                </select>
                <FaTrash className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="image"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  onChange={(e) => setImage(e.target.files[0])}
                  accept="image/*"
                />
                <FaCamera className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark">
              Submit Report
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

