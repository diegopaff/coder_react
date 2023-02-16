import React, { useState, useContext } from 'react';

import {getFirestore, collection, addDoc, } from "firebase/firestore";

import { CartContext } from '../../context/CartContext';

//estilos
import './Checkout.css';

const CheckoutContainer = () => {

    // traigo la información del carrito del contexto CartContext
    const { Cart, GetTotalCart } = useContext( CartContext ); 

    // creo un estado para guardar la información del comprador desde un formulario
    const [Buyer, SetBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    });

    // creo un estado para generar la orden de compra mezclando datos del comprador y del carrito
    const [Order, SetOrder] = useState({});

    //creo un estado ID para verificar cuando se ha enviado con éxito el formulario
    const [id, SetId] = useState();
    
    const submitHandler = (ev) => {
        
        //evito que se acualice el formulario
        ev.preventDefault();

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders'); //me conecto con la colleccion orders de mi firestore

        addDoc(ordersCollection, Order).then(snapshot => {
            
            // una vez mandado el formulario a firestore reinicio el estado Buyer
            SetBuyer({
                name: '',
                email: '',
                phone: ''
            });
        

            SetId(snapshot.id);// recupero el id de la orden generada
        })

    }

    const changeHandler = (ev) => {
        //Agarro value y name del event target para poder reutilizar el changeHandler en cada input
        const { value, name } = ev.target;
        SetBuyer({...Buyer, [name]: value});
        SetOrder({...Order, Buyer, Cart, Total:GetTotalCart()}); // mezclo la información del comprador con la del carrito
    }


    return (
    
        <div>
            { typeof id !== "undefined" ? (
                <div> 
                    <p> La órden de compra se ha generado con éxito </p>

                </div> 
            
            ) : (
            <div className='checkout_form_container' > 
                <h2> Checkout</h2>
                <form onSubmit={submitHandler}>
                    <div>
                        
                        <input 
                            className='checkout_form_input'
                            name="name"
                            id="name"
                            value={Buyer.name}
                            onChange={changeHandler}
                            placeholder='Nombre'
                        />
                    </div>
                    <div>
                        
                        <input
                            className='checkout_form_input' 
                            type="email"
                            name="email"
                            id="email"
                            value={Buyer.email}
                            onChange={changeHandler}
                            placeholder='E-mail'
                        />
                    </div>
                    <div>
                        
                        <input
                            className='checkout_form_input'
                            type="number"
                            name="phone"
                            id="phone"
                            value={Buyer.phone}
                            onChange={changeHandler}
                            placeholder='Teléfono'
                        />
                    </div>
                    <button className='btn-checkout'>Finalizar Compra</button>
                </form> 
            </div>
            )}
        </div>
        )
}

export default CheckoutContainer;