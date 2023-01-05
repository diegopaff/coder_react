import React, { useState } from 'react';
import ItemCount from '../components/ItemCount/ItemCount';

const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {

    const [Cart, setCart] = useState([]);


   
    //Funcion para obtener el total del precio del carrito
    const GetTotalCart = () => { 
        const total = Cart.reduce((acumulador, product) => {
            return acumulador += product.price*product.quantity;
          }, 0)
        return total;
        
    }
    

    // Función para vaciar el carrito
    const EmptyCart = () => setCart([]);

    // Función para verificar si esta en el carrito
    const IsInCart = (id) => (Cart.find((product) => product.id === id));
    // Función para eliminar producto del carrito
    const RemoveItemCart = (id) => setCart(Cart.filter((product) => product.id !== id))

    // Función para agregar productos al carrito 
    const AddToCart = (product , cantidad) => {
        
        setCart([...Cart, {...product, quantity: cantidad}]);
       
        
        
        /* if(IsInCart(product.id)){
            setCart(
                Cart.map((prod) => {
                    return prod.id === product.id ? 
                    {...prod, cantidad: cantidad} :
                    prod;
                })
            )
        } else {
            setCart([...Cart, {...ItemCount, cantidad}]);
        } */
    }


    return (
        <CartContext.Provider value={{
            Cart,
            EmptyCart,
            GetTotalCart,
            IsInCart,
            RemoveItemCart,
            AddToCart
        }}>

            { children }
        </CartContext.Provider>
        
    )

}


export { CartProvider , CartContext }; 
