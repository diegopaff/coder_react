import React from 'react';
import './CartWidget.css';

const CartWidget = ({ cantidad }) => {
    return(
        <div className='nav__item-link nav__item'> 
            <i class="material-icons">shopping_cart</i>

            <div className={cantidad !== 0 ? 'items_cart' : 'no-items' }>
                <p>{cantidad}</p> 
            </div>
            <p> Cart </p>
        </div> 
    )
}

export default CartWidget;