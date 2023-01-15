import React, {useEffect , useState}  from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


import {useParams} from 'react-router-dom';

import ItemList from '../../components/ItemListContainer/ItemList';

import './Category.css';

//Componente que llama a una api por un producto en específico
const CategoryContainer = () => {
    const [categoryCollection, setCategoryCollection] = useState([]);
    const {category} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, 'items');

        const FilterQuery = query(itemsCollection, where("category", "==", category));
        getDocs(FilterQuery).then((snapshot) => {

          const items = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setCategoryCollection(items);
        });
    }, [category]);
    

    return (
        <div className='category_list'>
           <h3>{category}</h3>
           
           <ItemList products={categoryCollection} />
        </div>
    );
}

export default CategoryContainer;

