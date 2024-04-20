import React from "react";
import "./Navbar.css";
import logo from "../../assets/logoimg.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <div>
          <img src={logo} className="logo-img" alt="LogoImage" />
        </div>
        <div>
          <p>UZAIR BASHIR</p>
        </div>
      </div>
      <div>
        <ul className="menu-items">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
