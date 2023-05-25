import React, { useEffect, useState } from 'react'
import { prepareId } from '../components/Recipe'
import { v4 as uuidv4 } from 'uuid'

function Nutrition() {
  const [consumedRecipes, setConsumedRecipes] = useState()

  useEffect(()=>{
    const recipesLS = localStorage.getItem('recipes_consumed')
    if (recipesLS !== null){
      let the_recipes = JSON.parse(recipesLS)

      if(the_recipes.length > 0){
        setConsumedRecipes(the_recipes)
        
      }
    } 
  },[])


  return (
    <>
    <h4>Log of prepared and consumed meals</h4>
    <br/>
    
      
      
  <table className="table table-bordered">
    <thead>
      <tr> 
        <th scope="col">Meal Label</th>
        <th scope="col">Calories</th>
        <th scope="col">Proteins</th>
        <th scope="col">Carbs</th>
        <th scope="col">Fats</th>
      </tr>
    </thead>
    <tbody>
    {consumedRecipes && consumedRecipes.map(item=><tr key={uuidv4()}>
      
        <td>{item.label}</td>
        <td>{Number(item.calories/item.yield).toFixed()}</td>
        <td>{Number(item.totalNutrients.PROCNT['quantity']/item.yield).toFixed()} g</td>
        <td>{Number(item.totalNutrients.CHOCDF['quantity']/item.yield).toFixed()} g</td>
        <td>{Number(item.totalNutrients.FAT['quantity']/item.yield).toFixed()} g</td>
      
      </tr>)}
    </tbody>
  </table>
    </>
  )

}


export default Nutrition