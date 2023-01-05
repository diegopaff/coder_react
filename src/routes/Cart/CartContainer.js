import React, { useContext } from 'react';
import CartItem from './CartItem'; 
import { CartContext } from '../../context/CartContext';

const CartContainer = () => {

    const { Cart, GetTotalCart, EmptyCart, RemoveItemCart } = useContext( CartContext ); 
    const EmptyCartHandler = () => EmptyCart();

    

    return (
        <div>
            {Cart.map((product) => (
                < CartItem product={product} key={product.id} />
            ))}
            <p> El total de tu compra es de: {GetTotalCart()}</p>
            <button onClick={EmptyCartHandler}>Vaciar Carrito</button>
        </div>
    ) 
}

export default CartContainer;