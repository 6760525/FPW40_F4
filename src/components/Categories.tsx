import React, {useEffect, useState} from 'react';
import Category from './Category';
import axios from 'axios';
import { Outlet } from "react-router-dom";
import { CategoryType, CategoryArray } from '../types/myTypes';
import { initialStateCat } from "../types/InitialStateObjects";
import '../css/Categories.css';

function Categories() {
    let [aCategories, setCategories] = useState(initialStateCat);
    useEffect(() => {
        axios.get<CategoryArray>('http://127.0.0.1:8000/api/v1/categories/').then((response) => {
            if (response.status === 200) {
                setCategories(response.data);
            }
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <React.Fragment>
            <div className = 'categories-container'>
                <div className='categories-white-list'>
                    <h1 className='categories-header'>Категории</h1>
                    <div className='categories-list-container'>
                        {aCategories.map((category: CategoryType) => <Category key={category.id} category={category}/>)}
                        <Outlet />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Categories;