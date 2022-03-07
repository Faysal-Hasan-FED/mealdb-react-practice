import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let ordered =''
    for(let meal of cart){
        <br />
        ordered += meal.strMeal + ' ';
        
    }
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Foods Ordered: {cart.length}</h4>
            <small>{ordered}</small>
        </div>
    );
};

export default Cart;