
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipesFeed from './pages/RecipesFeed';
import Nutrition from './pages/Nutrition';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import axios from "axios";
import RecipesContext from './RecipesContext'
import RecipeDetails from './pages/RecipeDetails';



function App() {
  const [recipes, setRecipes] = useState();
  const [query, setQuery] = useState('Hamburger');

  const app_id = "365f7ddc";
  const app_key = "5487745d2564ece80dbfb5defccf800d";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=20`;
  // https://api.edamam.com/search?q=${query}&app_id=365f7ddc&app_key=5487745d2564ece80dbfb5defccf800d&page=3

  useEffect(()=>{
    axios.get(url).then(response=>setRecipes(response.data.hits)).catch(err=>console.log(err))
    
  },[query])

  const handleSearch = (e)=>{
    e.preventDefault();
    switch(e.keyCode) {
      case 13:
        setQuery(e.target.value)
        e.target.value = '';
        break;
    }}

    


  
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <RecipesContext.Provider value={{recipes}}>
        <Routes>
            <Route path="/" exact element={<RecipesFeed handleSearch={handleSearch}/>} />
            <Route path="/nutrition_log" exact element={<Nutrition />} />
            <Route path="/recipe/:id" exact element={<RecipeDetails />} />
        </Routes>
        </RecipesContext.Provider>
      </Router>
        
        
    </div>
  );
}

export default App;
