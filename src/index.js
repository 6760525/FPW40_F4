import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import RecipesInCategory from "./components/RecipesInCategory";
import RecipeDetail from "./components/RecipeDetail";
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route path="recipesInCategory" element={<RecipesInCategory />}>
                    <Route path=":categoryId" element={<RecipesInCategory />} />
                </Route>
                <Route path="recipes" element={<Recipes />} />
                <Route path="recipe" element = {<RecipeDetail />}>
                    <Route path=":recipeId" element={<RecipeDetail />} />
                </Route>
            </Route>
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


function NoMatch() {
    return (
        <div>
            <h2>Здесь ничего нет</h2>
            <p>
                <Link to="/">На главную</Link>
            </p>
        </div>
    );
}
