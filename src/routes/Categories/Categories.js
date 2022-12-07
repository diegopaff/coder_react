import React, { useEffect , useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(setCategories);
    },[]);
    return (
        <div>
            <ul>
                {categories?.map((categorie) => 
                <li>{categorie}</li>) }
            </ul> 
        </div>
    )
}

export default Categories;