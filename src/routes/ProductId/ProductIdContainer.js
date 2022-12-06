import React, {useEffect , useState}  from 'react';
import './ProductId.css';

import {useParams} from 'react-router-dom';
import ProductId from './ProductId.js';
const ProductIdContainer = () => {

    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(setProduct);
    },[id]);
    
    return (
        <div>
            <ProductId product={product}/>
        </div>
    );
}

export default ProductIdContainer;