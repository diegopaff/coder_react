import React from 'react';

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
const Store = () =>{

    return (
        <main className="shop">
            <ItemListContainer greet={'Productos Disponibles'}/>
        </main>
    )
}

export default Store;