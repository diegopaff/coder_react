import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';

import ItemList from './ItemList.js'

const ItemListContainer = ({ greet }) => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((obj) => (
            setProducts(obj.products)
            ));            
  }, []);

console.log(products); 
    return (
        <div className="greeting">

            <h1> { greet }</h1>
            <ItemList products={products} />
           
      
        </div>
        
    );

}

export default ItemListContainer;