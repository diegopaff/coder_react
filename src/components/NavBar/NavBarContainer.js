import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import NavBar from './NavBar';
const NavBarContainer = () => {

    //desde la base de datos me traigo todas las categorias existentes.
    
    
    const [categories, setCategories] = useState([]); //averiguo todas las categorias existentes
    
    useEffect(() => {
        const db = getFirestore();
        
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection).then((snapshot) => {
          
            const colleccion = snapshot.docs.map((doc) => ({...doc.data()}));
            
            const categoria = colleccion.map((cat) => (cat.category))
        
            setCategories(categoria);
        });
    }, []);

    
    const allCategories = [...new Set(categories)]; // me quedo solo con los valores sin repetir
      
    return  <div>
        <NavBar categories={allCategories}/>
    </div>
}

export default NavBarContainer;


