import React, {useEffect , useState}  from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './ProductId.css';

import {useParams} from 'react-router-dom';
import ProductId from './ProductId.js';


//Componente que llama a una api por un producto en específico
const ProductIdContainer = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
        getDoc(itemRef).then((snapshot) => {
          if (snapshot.exists()) {
            setProduct({ id: snapshot.id, ...snapshot.data() });
          }
        });
      }, [id]);

    return (
        <div className='Item-detail'>
            <ProductId product={product}/>
            
        </div>
    );
}

export default ProductIdContainer;

/* useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(setProduct);
},[id]); */