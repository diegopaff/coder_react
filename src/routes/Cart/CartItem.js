import React from 'react';
import './Cart.css';


const CartItem = ({ product, remove }) => {

    const TotalItemPrice = product.price * product.quantity;
    const RemoveItemCartHandler = () => {
        remove(product.id);
    }
       
    return (
        <div className='separador'>
            <div className='Cart__item'>
                <div className='img-container'>
                    <img className='item__image' src={product.image}/>
                </div>
                
                <div className='Cart__item-details'>
                    <div>
                        <p className='title'> {product.title} </p>
                        <p className='brand'> by {product.brand} </p>
                    </div>
                    
                    <p className='quantity'> Cantidad: {product.quantity} </p>
                    <p className='price'>
                         ${product.price} 
                    </p>
                    
                    {/* {product.quantity > 1 &&
                        <p className='price'>
                            Subtotal: {TotalItemPrice}
                        </p>} */}
                    <p onClick={RemoveItemCartHandler} className='item_delete'> Eliminar del carrito </p>
                </div>
                
            </div>
        </div>
        )
}

export default CartItem;