import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <a className="navbar-logo" href="#">Your Logo</a>
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
      {/* Hero Image */}
      <header>
        <div className="header-text">
          <h1> BStrong<br /><span id="photography"> </span></h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
          <button id='preetesh' > Learn More </button>
        </div>
      </header>
      {/* Hero Image */}

      {/* Footer */}
      <div className="footer">
      <div className="contain">
        {/* Column 1 */}
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className="col">
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="col">
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        {/* Column 4 */}
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
            <li>Web templates</li>
            <li>Email templates</li>
          </ul>
        </div>
        {/* Column 5 */}
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        {/* Column 6 */}
        <div className="col social">
          <h1>Social</h1>
          <ul>
            <li><img src="https://svgshare.com/i/5fq.svg" width="32" style={{ width: '32px' }} /></li>
            <li><img src="https://svgshare.com/i/5eA.svg" width="32" style={{ width: '32px' }} /></li>
            <li><img src="https://svgshare.com/i/5f_.svg" width="32" style={{ width: '32px' }} /></li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>

      {/* Footer */}
    </div>
  );
};

export default Navbar;

