import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ( nombre ) => {
    
    const linkTo = '/Category/'+ nombre.nombre;
    return (

        <Link className='category_container' to={linkTo}>
            <li className='category_link'>   
                <p>{nombre.nombre}</p>
            </li>
        </Link>
    )
}

export default CategoryLink;

