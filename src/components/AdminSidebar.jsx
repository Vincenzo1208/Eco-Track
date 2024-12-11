import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUsers, 
  FaChartBar, 
  FaClipboardList,
  FaRoute,
  FaBoxes,
  FaBullhorn,
  FaCog
} from 'react-icons/fa';

export function AdminSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { path: '/admin-dashboard', icon: FaHome, label: 'Dashboard' },
    { path: '/admin/users', icon: FaUsers, label: 'User Management' },
    { path: '/admin/reports', icon: FaChartBar, label: 'Collection Reports' },
    { path: '/admin/complaints', icon: FaClipboardList, label: 'Complaints' },
    { path: '/admin/routes', icon: FaRoute, label: 'Route Management' },
    { path: '/admin/inventory', icon: FaBoxes, label: 'Inventory' },
    { path: '/admin/announcements', icon: FaBullhorn, label: 'Announcements' },
  ];

  return (
    <aside className="fixed top-0 left-0 z-20 w-64 h-screen pt-16 bg-white border-r border-gray-200 transition-transform overflow-y-auto">
      <div className="h-full px-3 py-4">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group ${
                  location.pathname === item.path ? 'bg-green-100' : ''
                }`}
              >
                <item.icon className={`w-5 h-5 text-gray-500 transition duration-75 ${
                  location.pathname === item.path ? 'text-primary' : ''
                }`} />
                <span className="ml-3">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="pt-4 mt-4 space-y-2 border-t border-gray-200">
          <Link
            to="/admin/settings"
            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <FaCog className="w-5 h-5 text-gray-500 transition duration-75" />
            <span className="ml-3">Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

