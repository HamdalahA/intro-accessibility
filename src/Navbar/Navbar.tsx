import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {

  return (
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                PB + J
            </div>
            <ul className="navbar-menu">
                <Link to="/inaccessible" className="navbar-item navbar-link">Inaccessible</Link>
                <Link to="/accessible" className="navbar-item navbar-link">Accessible</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;