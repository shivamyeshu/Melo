// import React from 'react';
"use client";

import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <h1>Melo</h1>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} ref={menuRef}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Documentation</a></li>
          <li><a href="#about" onClick={toggleMenu}>Blogs</a></li>
          <li><a href="#services" onClick={toggleMenu}>Timeline</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Tools</a></li>
        </ul>
      </nav>
      <div className="user">
        <h1>User</h1>
      </div>
    </header>
  );
};

export default Navbar;
