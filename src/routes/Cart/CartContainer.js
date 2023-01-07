import React, { useContext } from 'react';
import CartItem from './CartItem'; 
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartContainer = () => {

    const { Cart, GetTotalCart, EmptyCart, RemoveItemCart } = useContext( CartContext ); 
    const EmptyCartHandler = () => EmptyCart();
    
    //si hay items en el carrito renderizo:
    if(Cart.length > 0){
        return (
        <div className='Cart'>
            {Cart.map((product) => (
            <CartItem 
                product={product} 
                remove={RemoveItemCart}
                />
            ))}
            <p> El total de tu compra es de: {GetTotalCart()}</p>
            <button onClick={EmptyCartHandler} className='btn'>Vaciar Carrito</button>
            
        </div>
        )   
     }
    
    //si NO hay items renderizo:
    return (
        <div className='Cart'>
            <p> Todavía no agregaste ningún producto al carrito </p>
            
            <Link className='nav__item-link' to='/Store'>
                <button className='btn'>
                    <i class="material-icons">loyalty</i>
                    Haz click para ir a la Store a comprar 
                </button>
            </Link>     
        </div>
    ) 
}

export default CartContainer;