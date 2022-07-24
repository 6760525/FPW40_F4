import React, {useEffect, useState} from 'react';
import axios from "axios";
import {CategoryArray, RecipesArray, RecipeType} from "../types/myTypes";
import {initialState, initialStateCat} from "../types/InitialStateObjects";
import RecipeItems from "./RecipeItems";
import '../css/Recipes.css';

function Recipes() {

    let queryString = 'http://127.0.0.1:8000/api/v1/recipes/';
    let queryStringCat = 'http://127.0.0.1:8000/api/v1/categories/';

    let [aRecipes, setRecipes] = useState(initialState);
    let [aCategory, setCategory] = useState(initialStateCat);


    useEffect(() => {
        axios.get<RecipesArray>(queryString).then((response) => {
            if (response.status === 200) {
                setRecipes(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [queryString]);

    useEffect(() => {
        axios.get<CategoryArray>(queryStringCat).then((response) => {
            if (response.status === 200) {
                setCategory(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [queryStringCat]);

    return (
        <React.Fragment>
            <div className='list-container'>
                <div className='list-white-list'>
                    <h2>Рецепты</h2>
                    <div className='list-recipes-container'>
                        {aRecipes.map((recipe: RecipeType) => <RecipeItems key={recipe.id} recipe={recipe} categories={aCategory}/>)}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Recipes;