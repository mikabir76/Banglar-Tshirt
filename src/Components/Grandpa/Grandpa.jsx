import React from 'react';
import Father from '../Father/Father';
import Kaka from '../Kaka/Kaka';
import Fufu from '../Fufu/Fufu';
import './Grandpa.css';

const Grandpa = () => {
    const ring = 'Diamond'
    return (
        <div className='grandpa'>
            <h1>Grandpa</h1>
        <section className='flex'>
                <Father ring={ring}></Father>
                <Kaka></Kaka>
                <Fufu></Fufu>
            </section>
        </div>
    );
};

export default Grandpa;