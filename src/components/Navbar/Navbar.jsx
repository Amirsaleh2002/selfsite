import React from "react";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="left-nav">
        <h1 className="nav-name">SALEH</h1>
      </div>
      <ul className="right-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
