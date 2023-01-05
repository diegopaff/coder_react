import React from 'react';
import './ItemListContainer.css';
import ProductCard from '../ProductCard/ProductCard.js';

const ItemList = ({ products }) => {
    
    return (
        <div className='products'>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
                
            ))}
        </div>
    )

}

export default ItemList;