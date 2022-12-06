import React, { useEffect , useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(setCategories);
    })
    return (
        <div> 
            {categories?.map((categorie) => <p>{categorie}</p>) }
        </div>
    )
}

export default Categories;