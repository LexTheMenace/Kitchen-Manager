import React, { useState } from 'react';
import { fetchMeals } from './api/fetchMeals';
// Change to get all by id's and make searchable? 
export const RecipeApp = () => {
    const [ query, setQuery ] = useState('');
    const [ recipes, setRecipes ] = useState([]);

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchMeals(query);
           setRecipes(data.meals);
           console.log(data.meals[0]);
           setQuery('');
        }
    }
    return (
        <div className='main-container'>
            <input
                type='text'
                className='search'
                placeholder='Search by Category...'
                value={query}
                name='query'
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={search}
            />      

            {recipes.length > 0 && (
                <div>
                {recipes.map( recipe => {
                    return (
                        <div>
                        <img src={recipe.strMealThumb}/>
                        <h1 key={recipe.idMeal}>{recipe.strMeal}</h1>
                        </div>
                    )
                })}
                </div>
            )}  
        </div>
    )
}
