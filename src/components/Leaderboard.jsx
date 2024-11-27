import { FaTrophy, FaMedal } from 'react-icons/fa';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'John Doe', points: 1500 },
    { rank: 2, name: 'Jane Smith', points: 1350 },
    { rank: 3, name: 'Bob Johnson', points: 1200 },
    { rank: 4, name: 'Alice Brown', points: 1100 },
    { rank: 5, name: 'Charlie Davis', points: 1000 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Leaderboard</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboardData.map((user) => (
                  <tr key={user.rank} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {user.rank === 1 && <FaTrophy className="text-yellow-500 mr-2" />}
                        {user.rank === 2 && <FaMedal className="text-gray-400 mr-2" />}
                        {user.rank === 3 && <FaMedal className="text-yellow-600 mr-2" />}
                        {user.rank > 3 && <span className="font-medium mr-2">{user.rank}</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

