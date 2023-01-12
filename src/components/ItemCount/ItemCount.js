import React, { useState, useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import './ItemCount.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





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

    const notify = () => toast.success(`Se agregó ${Counter} ${product.title} al carrito`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    const onAdd = () => {
        
        AddToCart(product , Counter);
        notify();
        

    }

    const subTotalPrice = () => product.price * Counter


    return (
        
        <div className='item-Count'>

            <button type="button" className="btn-agregar" onClick={onAdd}>Agregar al Carrito - ${subTotalPrice()}</button>
            <div className="btn-group">
                <button type="button" className="btn_counter" onClick={restarItem}>-</button>
                <button type="button" className="count-number">{Counter}</button>
                <button type="button" className="btn_counter" onClick={sumarItem}>+</button>
            </div>
            <ToastContainer />
            
        </div>
    )
}

export default ItemCount;