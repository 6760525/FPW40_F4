import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {CategoryType, RecipesArray, RecipeType} from '../types/myTypes';
import RecipeItemList from "./RecipeItemList";
import {initialState, initialStateCategory} from "../types/InitialStateObjects";
import '../css/RecipesInCategory.css';


function RecipesInCategory() {
    let params = useParams();
    let queryString = 'http://127.0.0.1:8000/api/v1/recipes/?category='+params.categoryId;
    let queryStringCat = 'http://127.0.0.1:8000/api/v1/categories/'+params.categoryId;

    let [aRecipes, setRecipesByCategory] = useState(initialState);
    let [recipesCategory, setRecipesCategory] = useState(initialStateCategory);

    useEffect(() => {
        axios.get<RecipesArray>(queryString).then((response) => {
            if (response.status === 200) {
                setRecipesByCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [queryString]);

    useEffect(() => {
        axios.get<CategoryType>(queryStringCat).then((response) => {
            if (response.status === 200) {
                setRecipesCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [queryStringCat]);

    return (
        <div className='ric-list-container'>
            <div className='ric-list-white-list'>
                <h2 className='ric-list-header'>{recipesCategory.name}</h2>
                <div className='ric-list-recipes-container'>
                    {aRecipes.map((recipe: RecipeType) => <RecipeItemList key={recipe.id} recipe={recipe}/>)}
                </div>
                <Link to='/categories' className='nav-link-category'>Категории</Link>
            </div>
        </div>
    )
}

export default RecipesInCategory