import React from 'react';
import './ProductId.css';
import ItemCount from '../../components/ItemCount/ItemCount';


const ProductId = ( { product }) => {

    return (
        <div> 
            <img src={product.image} />
            <h2 className='product__title'>{product.title}</h2>
            <p className='product__description'>Descripción:{product.description}</p>
            <p className='product__price'> Precio: {product.price} $</p>
            <p className='product__description'>Rating: {product.rating}</p>
            
            {product.thumbnail?.map((imagen)=> (
                <img src={imagen} className='small-images'/>
            ))
            }
            <ItemCount product={product}  stock={product.stock} />


        </div>

    );

}

export default ProductId;