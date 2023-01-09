import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';

import ItemList from './ItemList.js'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = ({ id }) => {
    const [products, setProducts] = useState([]);

    const [filter, setFilter] = useState('all');
    useEffect(() => {
        const db = getFirestore();

        // Con esta variable hago el llamado de todos los items de db
        const itemsCollection = collection(db, 'items');

        // Con esta variable hago el llamado con el filtro de category
        const FilterQuery = query(itemsCollection, where("category", "==", filter));  

        
        getDocs(filter === 'all' ? itemsCollection : FilterQuery).then((snapshot) => {
          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setProducts(items);
        });
      }, [filter]);

    const filterOnChangeHandler = (ev) => { 
      setFilter(ev.target.value);

    }  
    
    

    return (
        <div className="ItemList">
            <select onChange={filterOnChangeHandler}>
              <option value="all"> All </option>
              <option value="laptops"> Laptops </option>
              <option value="smartphones"> Smartphones </option>
              <option value="fragances" > Perfumes </option>
            </select>
            <ItemList products={products} />
        </div>
        
    );

}

export default ItemListContainer;


/* useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((obj) => (
                setProducts(obj.products)
                ));            
    }, []); */