import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2 className='header-name'>Developer Cafe</h2>
            <div className='header-link'>
                <a href="">Programmer</a>
                <a href="">Web Developer</a>
                <a href="">App Developer</a>
            </div>
        </div>
    );
};

export default Header;