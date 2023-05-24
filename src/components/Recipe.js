import React, { useContext } from 'react'
import image from '../img/garlic-chilli-prawn-pasta-181440-1.jpg'
import RecipesContext from '../RecipesContext'
import { Link } from 'react-router-dom'

export function prepareId(num) {
  let numStr = num.toString();
  let decimalIndex = numStr.indexOf('.');
  if (decimalIndex !== -1) {
    return numStr.substr(decimalIndex + 1);
  }
  return '';
}





function Recipe({title, calories, image}) {
    
    
  return (
    <div className="card d-flex" style={{'width': '14rem', 'marginTop': '1rem'}}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span>Calories: {calories} </span>
            
            
            <p className="card-text">Some quick example text to build on the card.</p>
            <Link to={`/recipe/${prepareId(calories)}`} className="btn btn-outline-primary">Details</Link>
        </div>
        
        
        </div>
  )
}

export default Recipe