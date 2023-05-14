
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipesFeed from './pages/RecipesFeed';
import Nutrition from './pages/Nutrition';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Routes>
            <Route path="/" element={<RecipesFeed />} />
            <Route path="/nutrition_log" element={<Nutrition />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
