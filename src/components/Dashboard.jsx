import { 
    FaRecycle, 
    FaMapMarkerAlt, 
    FaCoins, 
    FaLeaf,
    FaClipboardList,
    FaCalendarPlus,
    FaChartLine,
    FaUserFriends
  } from 'react-icons/fa';
  import { TopNav } from './TopNav';
  import { Sidebar } from './Sidebar';
  import { ImpactCard } from './ImpactCard';
  import { Link } from 'react-router-dom';
  
  export default function Dashboard() {
    const impactMetrics = [
      { icon: FaRecycle, value: '350 kg', label: 'Waste Collected' },
      { icon: FaMapMarkerAlt, value: '4', label: 'Reports Submitted' },
      { icon: FaCoins, value: '0', label: 'Tokens Earned' },
      { icon: FaLeaf, value: '175 kg', label: 'CO2 Offset' },
    ];
  
    const recentActivities = [
      { action: 'Reported waste', location: 'Main St. Park', time: '2 hours ago' },
      { action: 'Collected waste', amount: '5 kg', time: '1 day ago' },
      { action: 'Earned reward', reward: 'Eco-friendly Water Bottle', time: '3 days ago' },
      { action: 'Scheduled pickup', date: 'Next Monday', time: '1 week ago' },
    ];
  
    const quickActions = [
      { icon: FaClipboardList, label: 'Report Waste', link: '/report' },
      { icon: FaCalendarPlus, label: 'Schedule Pickup', link: '/schedule' },
      { icon: FaChartLine, label: 'View Statistics', link: '/statistics' },
      { icon: FaUserFriends, label: 'Invite Friends', link: '/invite' },
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <TopNav />
        <Sidebar />
        
        <main className="p-4 md:ml-64 pt-20">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactMetrics.map((metric, index) => (
                <ImpactCard
                  key={index}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <ul className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                        <FaRecycle className="text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}
                          {activity.location && ` at ${activity.location}`}
                          {activity.amount && `: ${activity.amount}`}
                          {activity.reward && `: ${activity.reward}`}
                          {activity.date && ` for ${activity.date}`}
                        </p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.link}
                      className="flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <action.icon className="text-3xl text-primary mb-2" />
                      <span className="text-sm font-medium text-gray-900">{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
  
  