import React from 'react';
import './NavBar.css';

import CartWidget from '../CartWidget/CartWidget.js'
const NavBar = ({cantidad}) => {
    return(
        <header>
            <nav className='nav'>
                <a className='logo nav__item-link' href='#'> Logo </a>
                <ul  className='nav__item-list'>
                    <li className='nav__item'>
                        <a className='nav__item-link' href='#'> <i class="material-icons">public</i> Home </a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__item-link' href='#'> <i class="material-icons">loyalty</i>Collections </a>
                    </li>
                    <li className='nav__item'>
                        <a className='nav__item-link' href='#'> <i class="material-icons">work</i>Accesories </a>
                    </li>
                </ul>
                <CartWidget cantidad={6}/>
            </nav>
        </header>
    );
}

export default NavBar;