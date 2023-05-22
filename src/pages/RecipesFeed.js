import React, { useContext } from 'react'
import Recipe from '../components/Recipe'
import RecipesContext from '../RecipesContext'


function RecipesFeed({handleSearch}) {
  const {recipes} = useContext(RecipesContext)
  
  return (
    <div className='container'>
        
        <h3>Recipe Feed</h3>
          <input type='text'  placeholder='Search recipe...' onKeyUp={handleSearch}  />
        <div className='d-flex justify-content-around flex-wrap'>
          {recipes && recipes.map(item=>(
            <Recipe 
              key={item.recipe.label}
              title={item.recipe.label}
              calories={item.recipe.calories}
              image={item.recipe.image}
              />
          ))}
        </div>
        
    </div>
  )
}

export default RecipesFeed