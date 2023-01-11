import React from 'react';
import './Home.css';

import { Link } from 'react-router-dom';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
const Home = () => {

    return (
        <div className='home-page'>
            <h1 className='home-page__greeting'> Bienvenidos a E-shop </h1>
            
            <img className='home-page__background' src={require('../../images/home-hero.jpg')}/>
            <Link to={`/Store`}>
                <button className='button-50'> ir a la store </button>
            </Link>
        </div>
    );
};

export default Home;