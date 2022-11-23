import React from "react";
import './ItemListContainer.css';

const ItemListContainer = ({ greet }) => {
    return (
        <div className="greeting">
            <h1> { greet }</h1>
        </div>
        
    );

}

export default ItemListContainer;