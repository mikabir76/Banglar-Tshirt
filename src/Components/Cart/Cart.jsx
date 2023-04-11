import React from 'react';
import './Cart.css'

const Cart = ({cart, handlerXIcon}) => {
    // console.log(cart)
    return (
        <div className='cart-container'>
            <h3>Order Summury {cart.length}</h3>
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                <button onClick={()=> handlerXIcon(tshirt._id)}>X</button>
                </p>)
            }
            {/* <h4>Name{cart.name}</h4> */}
        </div>
    );
};

export default Cart;