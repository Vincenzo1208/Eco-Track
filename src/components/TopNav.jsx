
import { FaSearch, FaBell, FaRecycle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function TopNav() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30 top-0">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button 
              type="button"
              className="lg:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
            </button>
            <Link to="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-primary flex items-center gap-2">
                <FaRecycle className="h-8 w-8" />
                EcoTrack
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block mr-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FaSearch className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary"
                  placeholder="Search..."
                />
              </div>
            </div>
            <button className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100">
              <FaBell className="w-6 h-6" />
              <span className="sr-only">View notifications</span>
            </button>
            <div className="ml-3 flex items-center">
              <span className="text-sm text-gray-900 mr-2">0.00</span>
              <Link
                to="/login"
                className="text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-primary/50 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

