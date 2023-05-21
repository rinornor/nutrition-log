import React, { useContext } from 'react'
import Recipe from '../components/Recipe'
import RecipesContext from '../RecipesContext'


function RecipesFeed({handleSearch, query}) {
  const recipes = useContext(RecipesContext)
  
  return (
    <div className='container'>
        
        <h3>Recipe Feed</h3>
        <h2>{query}</h2>
        
          <input type='text'  placeholder='Search recipe...' onKeyUp={handleSearch}  />
          
            
        
        <Recipe /> 
    </div>
  )
}

export default RecipesFeed