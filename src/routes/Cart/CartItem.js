import React from 'react';
import './Cart.css';


const CartItem = ({ product, remove }) => {

    const TotalItemPrice = product.price * product.quantity;
    const RemoveItemCartHandler = () => {
        remove(product.id);
    }
       
    return (
        <div className='Cart__item'>
            <div className='img-container'>
                <img className='item__image' src={product.thumbnail}/>
            </div>
            
            <div className='Cart__item-details'>
                <p className='title'> {product.title} </p>
                <p className='price'> Precio por unidad: {product.price} $ </p>
                <p className='quantity'> Cantidad: {product.quantity} </p>
                {product.quantity > 1 &&
                    <p className='price'>
                        Subtotal: {TotalItemPrice}
                    </p>}
                <button onClick={RemoveItemCartHandler} className='btn delete'> Eliminar del carrito </button>
            </div>
        </div>)
}

export default CartItem;