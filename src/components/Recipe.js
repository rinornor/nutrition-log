import React, { useContext } from 'react'
import image from '../img/garlic-chilli-prawn-pasta-181440-1.jpg'
import RecipesContext from '../RecipesContext'


function Recipe({title, calories, image}) {
    const {recipes} = useContext(RecipesContext)
    
  return (
    <div className="card d-flex" style={{'width': '14rem', 'marginTop': '1rem'}}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span>Calories: {calories} </span>
            
            
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        
        
        </div>
  )
}

export default Recipe