import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/src/assets/img/logo.png" className='img' alt="Furniro Logo" value="FURNITRO"/>
      </div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-search"></i>
        <i className="fas fa-heart"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;