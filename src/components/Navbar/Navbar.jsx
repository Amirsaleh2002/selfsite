import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-nav">
        <h1 className="nav-name">SALEH</h1>
      </div>
      <ul className="right-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
