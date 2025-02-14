import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} className="navbar-icon" />
          </Link>
        </div>
        
        {/* Hamburger Button for Mobile */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-icon" />
        </div>
        
        {/* Navbar Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/water-energy" className="navbar-text">พลังงานน้ำ</Link>
          <Link to="/wind-energy" className="navbar-text">พลังงานลม</Link>
          <Link to="/solar-energy" className="navbar-text">พลังงานแสงอาทิตย์</Link>
          <Link to="/geothermal-energy" className="navbar-text">พลังงานความร้อนใต้พิภพ</Link>
          <Link to="/biomass-energy" className="navbar-text">พลังงานชีวมวล</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
