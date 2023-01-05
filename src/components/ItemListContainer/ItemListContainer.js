import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';

import ItemList from './ItemList.js'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((obj) => (
                setProducts(obj.products)
                ));            
    }, []);

    return (
        <div className="greeting">
            <ItemList products={products} />
        </div>
        
    );

}

export default ItemListContainer;