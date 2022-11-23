import React from 'react';
import './CartWidget.css';

const CartWidget = ({ cantidad }) => {
    return(
        <a className='nav__item-link nav__item' href='#'> 
            <i class="material-icons">shopping_cart</i>
            <div className='items_cart'> 
                <p>{cantidad}</p> 
            </div>
            <p> Carrito </p>
        </a> 
    )
}

export default CartWidget;