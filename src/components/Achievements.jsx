import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

export default function Achievements() {
  const achievements = [
    { id: 1, name: 'Recycling Rookie', description: 'Collect your first 10kg of waste', icon: FaStar, completed: true },
    { id: 2, name: 'Waste Warrior', description: 'Report 5 waste locations', icon: FaMedal, completed: false },
    { id: 3, name: 'Green Guardian', description: 'Offset 100kg of CO2', icon: FaTrophy, completed: false },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Achievements</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`bg-white rounded-lg shadow-md p-6 ${achievement.completed ? 'border-2 border-green-500' : ''}`}>
                <div className="flex items-center mb-4">
                  <achievement.icon className={`text-4xl mr-4 ${achievement.completed ? 'text-green-500' : 'text-gray-400'}`} />
                  <h3 className="text-xl font-semibold">{achievement.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{achievement.description}</p>
                {achievement.completed ? (
                  <span className="text-green-500 font-semibold">Completed!</span>
                ) : (
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                    View Progress
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

