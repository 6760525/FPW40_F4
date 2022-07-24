import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {initialStateCat, initialStateRecipeDetails} from "../types/InitialStateObjects";
import axios from "axios";
import {CategoryArray, RecipeType} from "../types/myTypes";
import RecipeCategories from "./RecipeCategories";
import '../css/RecipeDetail.css';

function RecipeDetail() {
    let params = useParams();
    let queryString = 'http://127.0.0.1:8000/api/v1/recipes/'+params.recipeId;
    let queryStringCat = 'http://127.0.0.1:8000/api/v1/categories/';

    const [recipe, setRecipe] = useState(initialStateRecipeDetails);
    const [aCategory, setCategory] = useState(initialStateCat);

    useEffect(() => {
        axios.get<RecipeType>(queryString).then((response) => {
            if (response.status === 200) {
                setRecipe(response.data);
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
        <div className = 'recipe-detail-container'>
            <div className='recipe-detail-white-list'>
                <div className='detail-wrapper'>
                    <div className='detail-img-title-description'>
                        <div className='detail-main-photo'>
                        <img
                            src={recipe.photo1}
                        />
                        </div>
                        <div className='detail-title-description'>
                            <h1 className='detail-title'>{recipe.title}</h1>
                            <p className='detail-description'>{recipe.description}</p>
                            <h2 className='detail-title'>Категории:</h2>
                            <div className = 'detail-name-category'>
                                {recipe.category.map((category: number) => <RecipeCategories key={category} category={category} categories={aCategory}/>)}
                            </div>
                            <h2 className='detail-title'>Продукты:</h2>
                            <p className='detail-ingredients'>{recipe.ingredients}</p>
                        </div>
                    </div>
                    <div className='detail-cooking-method'>
                        <h2>Приготовление:</h2>
                        <p>{recipe.cooking_method}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail;