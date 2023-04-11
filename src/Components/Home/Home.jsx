import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handlerBuyButton = (tshirt)=>{
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added!!')
        }
        else{

            const newCart = [...cart, tshirt];
           setCart(newCart)
        }
    };

    const handlerXIcon = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
           <div className='tshirt-container'> 
           {
                tshirts.map(tshirt => <Tshirt
                tshirt={tshirt}
                key={tshirt._id}
                handlerBuyButton={handlerBuyButton}
                ></Tshirt>)
            }
           </div>
           <div className='cart-container'>
            <Cart cart={cart}
            handlerXIcon={handlerXIcon}
            ></Cart>
           </div>
        </div>
    );
};

export default Home;