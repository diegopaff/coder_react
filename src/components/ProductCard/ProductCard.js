import React from 'react';

import './ProductCard.css'
import ThumbnailHandler from './ThumbnailHandler.js';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const id = product.id;
    return (

        <div className='card-container'>
            <Link to={`/Store/${id}`} className='product__link'>
                <ThumbnailHandler img={product.image}/>
                <p className='product__title'>{product.title}</p>
                <p className='product__price'> $ {product.price}</p>
                <span className='product__category'>{product.category}</span>
            </Link>
            
        </div>
    );

}

export default ProductCard;