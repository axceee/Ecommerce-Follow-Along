import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status when component mounts and when it updates
    const userEmail = localStorage.getItem('userEmail');
    setIsLoggedIn(!!userEmail);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-gray-900 border-b border-purple-500">
      <div className="px-4">
        <div className="flex justify-between items-center py-4">
          {/* Brand/Logo */}
          <Link to="/" className="text-purple-300 text-xl font-bold">
            E-Commerce
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-purple-300 hover:text-purple-400"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/my-products"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  My Products
                </Link>
                <Link
                  to="/product/create"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Add Product
                </Link>
                <Link
                  to="/cart"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Cart
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  Logout
                </button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Link
                  to="/user/login"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/user/signup"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  to="/my-products"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  My Products
                </Link>
                <Link
                  to="/product/create"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Add Product
                </Link>
                <Link
                  to="/cart"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Cart
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-center"
                >
                  Logout
                </button>
              </>
            )}
            {!isLoggedIn && (
              <>
                <Link
                  to="/user/login"
                  className="text-purple-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/user/signup"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium inline-block text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;