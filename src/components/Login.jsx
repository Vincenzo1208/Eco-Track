import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const backgroundImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7882888_3775146.jpg-u9iN2axMmfB1GkWJKhCKQ5VA4JnxgI.jpeg',
  'https://img.freepik.com/free-vector/people-recycling-concept_23-2148522560.jpg?t=st=1732550871~exp=1732554471~hmac=5441b24afef233884d76bae2e72122856209c8eab57abe59c8d06a18dea500f9&w=996',
  'https://img.freepik.com/free-vector/people-putting-rubbish-into-recycling-bin-holding-bottle-bulb_1262-19453.jpg?t=st=1732550962~exp=1732554562~hmac=3a7a29583a328eb12a07105cf616870132d09fc8ea39f8e38cbe2612f27f038b&w=996',
  'https://img.freepik.com/free-vector/characters-people-holding-green-energy-icons_53876-66137.jpg?t=st=1732551059~exp=1732554659~hmac=5c0516e36e72c3344eb385b27acdbf4de88c3d8789b8b00a4260e4a8922de5a0&w=900',
  'https://img.freepik.com/free-vector/city-park-garbage-composition_1284-69616.jpg?t=st=1732551112~exp=1732554712~hmac=6381faee6d7b05f49de00261e6727f97da65ad358158f5bb854f74bf5f3cdf56&w=1380'
];

function Login({ setIsLoggedIn, setUserRole }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoggedIn(true);
    setUserRole(role);

    switch (role) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'collector':
        navigate('/collector-dashboard');
        break;
      default:
        navigate('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen bg-green-200">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white shadow-2xl rounded-lg p-8">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              {isRegistering ? 'Create an Account' : 'Welcome To EcoTrack'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="role">
                  Role
                </label>
                <select
                  id="role"
                  className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-sm shadow-sm
                    focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="collector">Collector</option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  {isRegistering ? 'Register' : 'Log In'}
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <button
                type="button"
                className="text-sm text-primary hover:text-primary-dark"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? 'Already have an account? Sign in' : 'Need an account? Register'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 relative overflow-hidden">
        {backgroundImages.map((img, index) => (
          <div
            key={img}
            className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${img})`,
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white text-center px-4">
            Join Our Eco-Friendly Community
          </h2>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
  setUserRole: PropTypes.func.isRequired
};

export default Login;

