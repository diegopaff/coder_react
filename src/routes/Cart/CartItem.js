import React from 'react';

const CartItem = ({ product }) => {
       
    return (
        <div>
            <p> {product.title} </p>
            <p> Precio: {product.price} $ </p>
            <p> Cantidad: {product.quantity} </p>
        </div>)
}

export default CartItem;