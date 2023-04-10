import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
           <Link to='/'>Home</Link> 
           <Link to='/orders'>Order Review</Link> 
           <Link to='/about'>About us</Link> 
           <Link to='/contact'>Contact</Link> 
        </nav>
    );
};

export default Header;