import React from 'react';
import Logo from '../assets/logo.svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <div className="light"></div>
        <div className="medium"></div>
        <div className="dark"></div>
        <div className="gOne"></div>
        <div className="gTwo"></div>
        <div className="gThree"></div>
      </div>
    </header>
  );
}

export default Header;
