import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <div className="navbar-container">
      <div className="left-nav">
        <h1 className="nav-name">SALEH</h1>
      </div>
      <div className="hamburger-menu" onClick={() => setIsMenuShown(true)}>
        <FaHamburger />
      </div>

      {isMenuShown ? (
        <ul className="right-nav-responsive">
          <div className="close-menu" onClick={() => setIsMenuShown(false)}>
            <FaWindowClose />
          </div>
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
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">
              Work samples
            </Link>
          </li>
        </ul>
      ) : (
        <>
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
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Work samples
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Navbar;
