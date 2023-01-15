import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget.js';
import CategoryLink from './CategoryLink.js';

import { CartContext } from '../../context/CartContext';
const NavBar = ( { categories }) => {

    const { Cart } = useContext( CartContext );

    return(
        <header>
            <nav className='nav'>
                <Link className='logo nav__item-link' to='/'> 
                    <img className='logo__img' src='https://www.clipartmax.com/png/full/176-1769737_price-tag-vector-price-tag-logo-png.png'/>
                    E-Shop 
                </Link>
                <ul className='nav__item-list'>
                    <Link className='nav__item-link' to='/'>
                        <li className='nav__item'>
                            <i class="material-icons">public</i>
                            Home 
                        </li>
                    </Link>
                    <Link className='nav__item-link' to='/Store'>
                        <li className='nav__item'>
                            <i class="material-icons">loyalty</i>
                            Store 
                        </li>
                    </Link>
                    <div className='nav__item-link'>
                        <li className='nav__item no-hover'>
                                <i class="material-icons">loyalty</i>
                                Categories
                        </li>
                    </div>

                    {/* Hago un listado con las categorias existentes */}
                    {categories.map((cat)=> ( 
                        <CategoryLink nombre={cat} />    
                    ))}
                    
    
    
                </ul>
                <Link className='nav__item-link' to='/Cart'> 
                    <CartWidget cantidad={Cart.length}/> 
                </Link>
                
            </nav>
        </header>
    );
}

export default NavBar;