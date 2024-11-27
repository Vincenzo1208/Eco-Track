import { FaCoins, FaGift, FaExchangeAlt } from 'react-icons/fa';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';

export default function Rewards() {
  const rewards = [
    { name: 'Eco-friendly Water Bottle', points: 500, icon: FaGift },
    { name: 'Reusable Shopping Bag', points: 300, icon: FaGift },
    { name: '10% Discount on Recycled Products', points: 1000, icon: FaGift },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />
      
      <main className="p-4 md:ml-64 pt-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Rewards</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaCoins className="mr-2 text-yellow-500" />
              Your Points: 750
            </h2>
            <p className="text-gray-600">Keep recycling to earn more points and redeem exciting rewards!</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Available Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <reward.icon className="text-4xl text-primary mr-4" />
                  <h3 className="text-xl font-semibold">{reward.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{reward.points} points</p>
                <button className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary-dark flex items-center justify-center">
                  <FaExchangeAlt className="mr-2" />
                  Redeem
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

