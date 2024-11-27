
import { Link, useNavigate } from 'react-router-dom';
import { FaRecycle } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <FaRecycle />
          <span>EcoTrack</span>
        </Link>
        <nav>
          {isLoggedIn ? (
            <ul className="flex space-x-4">
              <li><Link to="/dashboard" className="hover:text-accent">Dashboard</Link></li>
              <li><Link to="/schedule" className="hover:text-accent">Schedule Pickup</Link></li>
              <li><Link to="/map" className="hover:text-accent">Recycling Map</Link></li>
              <li><button onClick={handleLogout} className="hover:text-accent">Logout</button></li>
            </ul>
          ) : (
            <Link to="/login" className="hover:text-accent">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
};

export default Header;

