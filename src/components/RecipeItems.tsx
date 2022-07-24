import React from 'react';
import {propsRecipeItem} from "../types/myTypes";
import {Link, Outlet} from "react-router-dom";
import RecipeCategories from "./RecipeCategories";
import '../css/RecipeItems.css';

function RecipeItems(props: propsRecipeItem) {

    let rDate = new Date(props.recipe.date_posted).toLocaleDateString();

    return (
        <div>
            <React.Fragment>
                <hr className="recipe-hr"/>
                <div className="recipe-item">
                    <div className="img-recipe">
                        <img src={props.recipe.photo1} alt={props.recipe.title}/>
                    </div>
                    <Link to={`/recipe/${props.recipe.id}`} className="nav-link-recipe">{props.recipe.title}</Link>
                    <div className="recipe-item-description">{props.recipe.description}</div>
                    <div className="name-category">
                        {props.recipe.category.map((category: number) => <RecipeCategories key={category} category={category} categories={props.categories}/>)}
                        <Outlet />
                    </div>
                    <div className = 'recipe-item-text'>
                        Дата: <b>{rDate}</b>
                        <br />
                        Оценка: <b>{props.recipe.rating}</b>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default RecipeItems;
