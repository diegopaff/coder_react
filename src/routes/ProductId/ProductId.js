import React from 'react';
import './ProductId.css';
const ProductId = ( { product }) => {

    return (
        <div> 
            <img src={product.thumbnail} />
            <h2 className='product__title'>{product.title}</h2>
            <p className='product__description'>Descripción:{product.description}</p>
            <p className='product__price'> Precio: {product.price} $</p>
            <p className='product__description'>Rating: {product.rating}</p>
            
            {product.images?.map((imagen)=> (
                <img src={imagen} className='small-images'/>
            ))
            }

        </div>

    );

}

export default ProductId;