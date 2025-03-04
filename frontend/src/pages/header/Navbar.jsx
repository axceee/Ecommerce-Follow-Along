import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 border-b border-purple-500">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-end space-x-6 py-4">
          <li>
            <Link
              to="/"
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/product/create"
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Create Product
            </Link>
          </li>
          <li>
            <Link 
              to="/user/login" 
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/user/signup" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;