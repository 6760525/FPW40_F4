import React from 'react';
import { propsRecipe } from "../types/myTypes";
import {Link} from "react-router-dom";
import '../css/RecipeItemList.css';

function RecipeItemList(props: propsRecipe) {

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
                    <div className = 'recipe-item-description'>{props.recipe.description}</div>
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

export default RecipeItemList;
