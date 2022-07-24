import React from 'react';
import {Link} from "react-router-dom";
import { propsCategory } from '../types/myTypes';
import '../css/Category.css';


function Category(props:propsCategory) {

    return (
        <React.Fragment>
            <hr className="category-hr"/>
            <div className="category">
                <div className="img-category">
                    <img src={props.category.photo} alt={props.category.name} />
                </div>
                <div className="name-description">
                    <h3 className="name-category-h">{props.category.name}</h3>
                    <p className="description">{props.category.description}</p>
                    <Link to={`/recipesInCategory/${props.category.id}`} className="nav-link-category">Рецепты</Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category;