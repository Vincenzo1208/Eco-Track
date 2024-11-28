import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import SchedulePickup from './components/SchedulePickup';
import RecyclingMap from './components/RecyclingMap';
import ReportWaste from './components/ReportWaste';
// import CollectWaste from './components/CollectWaste';
import Rewards from './components/Rewards';
import Leaderboard from './components/Leaderboard';
import Achievements from './components/Achievements';
import Statistics from './components/Statistics';
import CommunityForum from './components/CommunityForum';
import EcoTips from './components/EcoTips';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
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
        {/* <Route
          path="/collect"
          element={isLoggedIn ? <CollectWaste /> : <Navigate to="/login" />}
        /> */}
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
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;

