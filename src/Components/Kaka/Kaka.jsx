import React from 'react';
import Cousin from '../Cousin/Cousin';

const Kaka = () => {
    return (
        <div>
            <h2>Kaka</h2>
            <section className='flex'>
            <Cousin>Nabil</Cousin>
            <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Kaka;