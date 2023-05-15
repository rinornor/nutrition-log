import React, { createContext, useState } from "react";


const RecipeContext = createContext();

// Ne vend te setRecipe me vone i implementojme funksionet permes setRecipe dhe i dergojme ne komponentat qe na duhen sepse eshte praktike e keqe me e ekspozu funksionin e useState

function RecipeProvider({children}) {
    const [recipe, setRecipe] = useState();
  return (
    <RecipeContext.Provider value={{recipe, setRecipe}}  > 
        {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider