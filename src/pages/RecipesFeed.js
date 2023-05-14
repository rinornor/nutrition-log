import React from 'react'

function RecipesFeed() {
  return (
    <div className='container'>
        
        <h3>Recipe Feed</h3>
        <form>
            <input type='text' placeholder='search recipe...' />
            <input type='button' value='Go' />
        </form>
    </div>
  )
}

export default RecipesFeed