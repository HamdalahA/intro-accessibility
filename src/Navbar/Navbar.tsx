import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {

  return (
      <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-logo navbar-link">
                PB + J
            </Link>
            <ul className="navbar-menu">
                <Link to="/inaccessible" className="navbar-item navbar-link">Inaccessible</Link>
                <Link to="/accessible" className="navbar-item navbar-link">Accessible</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;
