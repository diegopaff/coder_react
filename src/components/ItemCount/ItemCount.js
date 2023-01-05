import React, { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';




const ItemCount = ({ stock, product }) => {

    //traigo del contexto las funciones y estados que necesito
    const { AddToCart } = useContext( CartContext );
    
    const [Counter , setCounter] = useState(1);

    const restarItem = () => {
        Counter > 0 ? setCounter(Counter - 1) : setCounter(Counter);
    }
    const sumarItem = () => {
        Counter < stock ? setCounter(Counter + 1) : setCounter(Counter);
    }

    const onAdd = () => {
        
        AddToCart(product , Counter);

    }



    return (
        
        <div>
            <div class="btn-group">
                <button type="button" className="btn_counter" onClick={restarItem}>-</button>
                <button type="button" className="btn_counter">{Counter}</button>
                <button type="button" className="btn_counter" onClick={sumarItem}>+</button>
            </div>
            <button type="button" className="btn_agregar" onClick={onAdd}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;