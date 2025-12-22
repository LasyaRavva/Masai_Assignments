import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MyApp</h1>
        <ul className="navbar-menu">
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/aboutus" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/todos" 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              Todos
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
