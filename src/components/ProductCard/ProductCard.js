import React from 'react';

import './ProductCard.css'
import ThumbnailHandler from './ThumbnailHandler.js';
const ProductCard = ({ product }) => {

    return (
        <div className='card-container'>
            <ThumbnailHandler img={product.thumbnail}/>
            <p className='product__title'>{product.title}</p>
            <p className='product__description'>{product.description}</p>
            <p className='product__price'> $ {product.price}</p>
        </div>
    );

}

export default ProductCard;