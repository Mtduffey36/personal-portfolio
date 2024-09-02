import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-dark-gray p-4'>
            <h1 className='text-2x1 font-bold'>Michael Duffey</h1>
            <nav className='flex space-x-4'>
                <NavLink exact to="/" className='px-3 py-2' activeClassName='bg-dark-green text-white'>
                About Me
                </NavLink>
                <NavLink exact to="/portfolio" className='px-3 py-2' activeClassName='bg-dark-green text-white'>
                Portfolio
                </NavLink>
                <NavLink exact to="/contact" className='px-3 py-2' activeClassName='bg-dark-green text-white'>
                Contact
                </NavLink>
                <NavLink exact to="/resume" className='px-3 py-2' activeClassName='bg-dark-green text-white'>
                Resume
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;