import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark-gray p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Michael Duffey</h1>
        <nav>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}
          >
            About Me
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}
          >
            Contact
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? 'text-white' : 'text-gray-400'}
          >
            Resume
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;