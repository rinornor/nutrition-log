import React from 'react'

import Recipe from '../components/Recipe'


function RecipesFeed() {
  
  return (
    <div className='container'>
        
        <h3>Recipe Feed</h3>
        <form>
            <input type='text' placeholder='search recipe...' />
            <input type='button' value='Go' />
        </form>
        
    <Recipe />
    </div>
  )
}

export default RecipesFeed