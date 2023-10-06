import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">BSTRONG</Link>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/aboutus" className="navbar-link">About Us</Link>
        <Link to="/contactus" className="navbar-link">Contact Us</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
      </div>
      <div className="navbar-buttons">
        <Link to="/signup" className="navbar-button">Signup</Link>
        {/* Replace the "Login" link with your authentication logic */}
        <Link to="#" className="navbar-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

