import React, {useEffect, useState} from 'react';
import {CategoryType, propsCatItem} from "../types/myTypes";
import {Link} from "react-router-dom";
import {initialStateCategory} from "../types/InitialStateObjects";
import '../css/RecipeCategories.css';


function RecipeCategories(props: propsCatItem) {

    const [catName, setCatName] = useState(initialStateCategory);
    let catObj:CategoryType|undefined;

    useEffect(() => {
        if (props.categories && props.category) {
            catObj = props.categories.find((cat:CategoryType) => cat.id === props.category);
            if (catObj) {
                setCatName(catObj);
            }
        }
    }, props.categories);

     return (
        <div className='recipe-categories'>
            <Link to={`/recipesInCategory/${props.category}`} className="nav-link-category">{catName.name}</Link>
        </div>
    )
}

export default RecipeCategories;