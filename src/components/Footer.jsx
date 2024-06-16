import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="footer-edg">
          <div className="footer-logo"><b>Funiro.</b></div>
          <div className="footer-info">
            <p>400 University Drive Suite 200 Coral<br></br> Gables,<br></br> FL 33134 USA</p>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <h2>Links</h2>
            <li><a href="#home">Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <ul>
            <h2>HELP</h2>
            <li><a href="#home">Payment Options</a></li>
            <li><a href="#shop">Returns</a></li>
            <li><a href="#about">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="finall">
           <p>© 2023 Furniro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;