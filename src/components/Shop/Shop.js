import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [meals,setMeals] = useState([]);
    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals)
            setDisplayMatchedMeals(data.meals)
        });
    },[])

    const [cart,setCart] = useState([]);

    const handleAddToCart = (meal) =>{
        const newMeals = [...cart,meal]
        setCart(newMeals);
    }

    const [displayMatchedMeals,setDisplayMatchedMeals] = useState([]);

    const handleSearch = event => {
        const searchedMeal = event.target.value;
        const matchedMeals = meals.filter (meal => meal.strMeal.toLowerCase().includes(searchedMeal.toLowerCase()));
        console.log(matchedMeals);
       setDisplayMatchedMeals(matchedMeals);
    }
    
    return (
    <div>
        <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder='Search food' />
        </div>
        <div className='shop-container'>
            <div className='meal-container'>
                {
                displayMatchedMeals.map(meal => <Meal
                handleAddToCart = {handleAddToCart}
                     key={meal.idMeal}
                      meal={meal
                    }></Meal>)
                }
           </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    </div>
        
    );
};

export default Shop;