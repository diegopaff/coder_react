import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return(
        <nav className='nav'>
            <a className='logo' href='#'> Logo </a>
            <ul  className='nav__item-list'>
                <li>
                    <a className='nav__item' href='#'> Home </a>
                </li>
                <li>
                    <a className='nav__item' href='#'> Collections </a>
                </li>
                <li>
                    <a className='nav__item' href='#'> Accesories </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;