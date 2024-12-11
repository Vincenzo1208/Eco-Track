import { 
    FaUsers, 
    FaUserTie, 
    FaExclamationCircle,
    FaTrash,
    FaClipboardList,
    FaRoute,
    FaChartBar,
    FaBullhorn
  } from 'react-icons/fa';
  import { TopNav } from './TopNav';
  import { AdminSidebar } from './AdminSidebar';
  import { ImpactCard } from './ImpactCard';
  import { Link } from 'react-router-dom';
  
  export default function AdminDashboard() {
    const impactMetrics = [
      { icon: FaUsers, value: '1,234', label: 'Total Users' },
      { icon: FaUserTie, value: '45', label: 'Waste Collectors' },
      { icon: FaExclamationCircle, value: '23', label: 'Active Complaints' },
      { icon: FaTrash, value: '2,450 kg', label: 'Waste Collected Today' },
    ];
  
    const recentActivities = [
      { action: 'New user registered', details: 'John Doe', time: '2 hours ago' },
      { action: 'Complaint resolved', details: 'Missed pickup at 123 Main St', time: '1 day ago' },
      { action: 'Route optimized', details: 'Downtown Area', time: '3 days ago' },
      { action: 'Inventory updated', details: 'Added 100 recycling bins', time: '1 week ago' },
    ];
  
    const quickActions = [
      { icon: FaClipboardList, label: 'Manage Complaints', link: '/admin/complaints' },
      { icon: FaRoute, label: 'Optimize Routes', link: '/admin/routes' },
      { icon: FaChartBar, label: 'View Reports', link: '/admin/reports' },
      { icon: FaBullhorn, label: 'Send Announcement', link: '/admin/announcements' },
    ];
  
    return (
      <div className="bg-gray-50 min-h-screen">
        <TopNav />
        <AdminSidebar />
        
        <main className="p-4 md:ml-64 pt-20">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
            
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
                        <FaUsers className="text-white" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.action}: {activity.details}
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
  
  