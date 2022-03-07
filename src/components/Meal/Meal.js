import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {strMeal,strMealThumb} = props.meal;
    return (
        <div className='meal'>
             <img style={{height:'400px'}} src={strMealThumb} alt="" />
            <div style={{padding:'20px'}}>
            <h2>{strMeal}</h2>
            <button onClick={()=>props.handleAddToCart(props.meal)} className='purchase-btn'>Add to cart</button>
            </div>
           
           
        </div>
        
    );
};

export default Meal;