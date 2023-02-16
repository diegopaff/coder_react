import React from 'react';

import './ProductCard.css'

const ThumbnailHandler = ({ img }) => {


    return (
        <div className='product__img-container'>
            <img src={img} alt="reference product"/>
        </div>
        
    );
}

export default ThumbnailHandler;