import React from 'react';
import './Home.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
const Home = () => {

    return (
        <div className='home-page'>
            <h1 className='home-page__greeting'> Bienvenidos a la store </h1>
            <p  className='home-page__secondary'> Haz click en Store de la barra de Navegación para ir a la tienda </p>
            <img className='home-page__background' src={require('../../images/home-hero.jpg')}/>
        </div>
    );
};

export default Home;