import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/user/login" className="text-white">Login</Link></li>
        <li><Link to="/user/signup" className="text-white">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;