import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const backgroundImages = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7882888_3775146.jpg-u9iN2axMmfB1GkWJKhCKQ5VA4JnxgI.jpeg',
  'https://img.freepik.com/free-vector/people-recycling-concept_23-2148522560.jpg?t=st=1732550871~exp=1732554471~hmac=5441b24afef233884d76bae2e72122856209c8eab57abe59c8d06a18dea500f9&w=996',
  'https://img.freepik.com/free-vector/people-putting-rubbish-into-recycling-bin-holding-bottle-bulb_1262-19453.jpg?t=st=1732550962~exp=1732554562~hmac=3a7a29583a328eb12a07105cf616870132d09fc8ea39f8e38cbe2612f27f038b&w=996',
  'https://img.freepik.com/free-vector/characters-people-holding-green-energy-icons_53876-66137.jpg?t=st=1732551059~exp=1732554659~hmac=5c0516e36e72c3344eb385b27acdbf4de88c3d8789b8b00a4260e4a8922de5a0&w=900',
  'https://img.freepik.com/free-vector/city-park-garbage-composition_1284-69616.jpg?t=st=1732551112~exp=1732554712~hmac=6381faee6d7b05f49de00261e6727f97da65ad358158f5bb854f74bf5f3cdf56&w=1380'
];

function Login({ setIsLoggedIn }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    // In a real app, you would handle authentication here
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out overflow-hidden"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentImageIndex ? 1 : 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add overlay to improve text readability
          }}
        />
      ))}
      <div className="relative px-8 py-6 mt-4 text-left bg-black bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-lg shadow-xl z-10 w-96">
        <h3 className="text-2xl font-bold text-center text-white mb-4">
          {isRegistering ? 'Create an Account' : 'Login to Your Account'}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white" htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              className="w-full px-4 py-2 mt-2 bg-black bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-white" htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="w-full px-4 py-2 mt-2 bg-black bg-opacity-20 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white placeholder-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 text-white bg-primary bg-opacity-80 rounded-lg hover:bg-opacity-100 transition-colors duration-300">
              {isRegistering ? 'Register' : 'Login'}
            </button>
            <button
              type="button"
              className="text-sm text-white hover:underline"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired
};

export default Login;

