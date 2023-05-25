import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipesContext from '../RecipesContext'
import { prepareId } from '../components/Recipe'
import { v4 as uuidv4 } from 'uuid'


function RecipeDetails() {
    const {recipes} = useContext(RecipesContext)
    const {id} = useParams()
    const [recipe, setRecipe] = useState()

    useEffect(()=>{
        setRecipe(recipes.filter(rec => prepareId(rec.recipe.calories) === id)[0])

        
    },[])

    const handleAddToConsumed = () => {
        const recipesLS = localStorage.getItem('recipes_consumed')
        if(recipesLS !== null ){
        let itemsConsumed = JSON.parse(recipesLS)
        localStorage.setItem('recipes_consumed', JSON.stringify([...itemsConsumed, recipe['recipe']]))
        }
        else{
            localStorage.setItem('recipes_consumed', JSON.stringify([recipe['recipe']]))
        }
       

        
    }
 
    return (
    <>
    
    <div className="container">
        {
            recipe &&
            <div className="card">
        <div className="card-body  mt-10">
            <h3 className="card-title">{recipe.recipe.label}</h3>
            <h6 className="card-subtitle">{recipe.recipe.source}</h6>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-6">
                    <div className="white-box text-center "><img src={recipe.recipe.image} className="rounded img-responsive" /></div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-6">
                    <h4 className="box-title mt-5">Recipe description</h4>
                    <p>Lorem Ipsum available,but the majority have suffered alteration in some form,by injected humour,or randomised words which don't look even slightly believable.but the majority have suffered alteration in some form,by injected humour</p>
                    
                    
                    <h3 className="box-title mt-5">Ingredients</h3>
                    <ul className="list-unstyled">

                        
                        {recipe.recipe.ingredientLines.map(ingredient=><li key={uuidv4()}>{ingredient}</li>)}
                        
                    </ul>
                    
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h3 className="box-title mt-5">General Info</h3>
                    <div className="table-responsive">
                        <table className="table table-striped table-product">
                            <tbody>
                                <tr>
                                    <td width="390">Health Label</td>
                                    {recipe.recipe.healthLabels.slice(1,2).map(label=><td key={uuidv4()}>{label}</td>)}
                                </tr>
                                <tr>
                                    <td>Diet Label</td>
                                    {recipe.recipe.dietLabels.slice(0,1).map(label=><td key={uuidv4()}>{label}</td>)}
                                </tr>
                                <tr>
                                    <td>Calories</td>
                                    <td key={uuidv4()}>{(Number(recipe.recipe.calories).toFixed(0))}</td>
                                </tr>
                                <tr>
                                    <td>Preparation Time</td>
                                    <td key={uuidv4()}> {`${recipe.recipe.totalTime} min`} </td>
                                </tr>
                                <tr>
                                    <td>Cuisine Type</td>
                                    {recipe.recipe.cuisineType.slice(0,1).map(label=><td key={uuidv4()}>{label}</td>)}
                                </tr>
                                <tr>
                                    <td>Meal Type</td>
                                    <td>{recipe.recipe.mealType}</td>
                                </tr>
                                <tr>
                                    <td>Dish Type</td>
                                    {recipe.recipe.dishType.slice(0,1).map(label=><td key={uuidv4()}>{label}</td>)}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2>Add to <button className="btn btn-secondary btn-rounded" onClick={handleAddToConsumed}>Consumed</button></h2>
                </div>
            </div>
        </div>
    </div>
        }
    </div>
    </>
  )
}

export default RecipeDetails