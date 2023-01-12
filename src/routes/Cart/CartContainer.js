import React, { useContext } from 'react';
import CartItem from './CartItem'; 
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CheckoutContainer from '../../components/Checkout/CheckoutContainer';

const CartContainer = () => {

    const { Cart, GetTotalCart, EmptyCart, RemoveItemCart } = useContext( CartContext ); 
    const EmptyCartHandler = () => EmptyCart();
    
    //si hay items en el carrito renderizo:
    if(Cart.length > 0){
        return (
        <div className='Cart'>
            <div className='Cart_Content'>
                <h2 className='Cart_title'>Tu Carrito</h2>
                <Link to={`/Store`}>
                        <p className='return_link'> No terminaste de comprar? Ir a la store </p>
                </Link>
                {Cart.map((product, index) => (
                <CartItem 
                    product={product} 
                    remove={RemoveItemCart}
                    key={index}
                    />
                ))}
            </div>
            <div className='checkout_container'>
                <CheckoutContainer />
                <p> El total de tu compra es de: {GetTotalCart()}</p>
                <button onClick={EmptyCartHandler} className='btn_emptyCart'>Vaciar Carrito</button>
                

            </div>
    
        </div>
        )   
     }
    
    //si NO hay items renderizo:
    return (
        <div className='Cart_empty'>
            <p> Todavía no agregaste ningún producto al carrito </p>
            
            <Link className='btn_toStore' to='/Store'>
                <button className='btn_toStore'>
                    <i class="material-icons">loyalty</i>
                    <p>Haz click para ir a la Store a comprar </p>
                </button>
            </Link>     
        </div>
    ) 
}

export default CartContainer;