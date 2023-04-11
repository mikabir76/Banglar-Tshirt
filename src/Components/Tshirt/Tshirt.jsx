import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handlerBuyButton}) => {
    // console.log(tshirt)
    const {gender, name, picture, price} = tshirt;
    return (
        <div className='image-container'>
           <div className="tshirt">
           <img src={picture} alt="" />
           </div>
           <div className="tshirt-details">
           <p className='tshirt-title'>{name}</p>
           <p>Price: {price}</p>
           <button onClick={()=> handlerBuyButton(tshirt)} className='buy-btn'>Buy Now</button> 
           </div>
        </div>
    );
};

export default Tshirt;