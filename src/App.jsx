import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SchedulePickup from './components/SchedulePickup';
import RecyclingMap from './components/RecyclingMap';
import ReportWaste from './components/ReportWaste';
import Rewards from './components/Rewards';
import Leaderboard from './components/Leaderboard';
import Achievements from './components/Achievements';
import Statistics from './components/Statistics';
import CommunityForum from './components/CommunityForum';
import EcoTips from './components/EcoTips';
import AdminDashboard from './components/AdminDashboard';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const getDashboardRoute = () => {
    switch (userRole) {
      case 'admin':
        return '/admin-dashboard';
      case 'collector':
        return '/collector-dashboard';
      default:
        return '/dashboard';
    }
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} 
        />
        <Route
          path="/dashboard"
          element={isLoggedIn && userRole === 'user' ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin-dashboard"
          element={isLoggedIn && userRole === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />}
        />
        
        <Route
          path="/schedule"
          element={isLoggedIn ? <SchedulePickup /> : <Navigate to="/login" />}
        />
        <Route
          path="/map"
          element={isLoggedIn ? <RecyclingMap /> : <Navigate to="/login" />}
        />
        <Route
          path="/report"
          element={isLoggedIn ? <ReportWaste /> : <Navigate to="/login" />}
        />
        <Route
          path="/rewards"
          element={isLoggedIn ? <Rewards /> : <Navigate to="/login" />}
        />
        <Route
          path="/leaderboard"
          element={isLoggedIn ? <Leaderboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/achievements"
          element={isLoggedIn ? <Achievements /> : <Navigate to="/login" />}
        />
        <Route
          path="/statistics"
          element={isLoggedIn ? <Statistics /> : <Navigate to="/login" />}
        />
        <Route
          path="/community"
          element={isLoggedIn ? <CommunityForum /> : <Navigate to="/login" />}
        />
        <Route
          path="/eco-tips"
          element={isLoggedIn ? <EcoTips /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to={getDashboardRoute()} />} />
      </Routes>
    </Router>
  );
}

export default App;

