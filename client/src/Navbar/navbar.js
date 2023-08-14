import React from 'react';
import './Navbar.css'; // Create this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#">Your Logo</a>
      <div className="navbar-buttons">
        <a className="navbar-button" href="#">Login</a>
        <a className="navbar-button" href="#">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
