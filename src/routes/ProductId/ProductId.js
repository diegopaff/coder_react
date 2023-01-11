import React from 'react';
import './ProductId.css';
import ItemCount from '../../components/ItemCount/ItemCount';

import {Link} from 'react-router-dom';

const ProductId = ( { product }) => {

    return (
        <div className='product-detail-container'>
            <div className='detail-img'>
                <img className='small-images' src={product.image} />
                {product.thumbnail?.map((imagen,index)=> (    
                    index < 3 && <img src={imagen} className='small-images'/> 
                ))
                }
            </div> 
            
            <div className='detail-info'>
                <h2 className='detail__title'>{product.title}</h2>
                <p className='detail__price'>  ${product.price}</p>
                <p className='detail__description'>{product.description}</p>
                <p className='detail__brand'>by {product.brand}</p>
    
                
            
                <ItemCount product={product}  stock={product.stock} />
                <Link to={`/Store`}>
                    <p className='simple_link'> seguir comprando </p>
                </Link>


            </div>
        </div>

    );

}

export default ProductId;