import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipesContext from '../RecipesContext'
import { prepareId } from '../components/Recipe'

function RecipeDetails() {
    const {recipes} = useContext(RecipesContext)
    const {id} = useParams()
    const [recipe, setRecipe] = useState()

    useEffect(()=>{
        setRecipe(recipes.filter(rec => prepareId(rec.recipe.calories) === id)[0])

        
    },[id])
 
    return (
    <div className='container'>
        {
            recipe &&
            <div>
                
                <img src={recipe.image} />
                <h3>{recipe.recipe.label}</h3>
                <p>{recipe.recipe.calories}</p>
               
                
            </div>
        }
    </div>
  )
}

export default RecipeDetails