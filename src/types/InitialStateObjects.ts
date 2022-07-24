import {CategoryArray, CategoryType, RecipesArray, RecipeType} from "./myTypes";

const initialStateCategory:CategoryType = {
    'id': 0,
    'name': '',
    'description': '',
    'photo': ''
}

const initialState:RecipesArray = [
    {
        "id": 1,
        "title": "",
        "description": "",
        "category": [0],
        "author": 1,
        "date_posted": "",
        "ingredients": "",
        "cooking_method": "",
        "photo1": '',
        "photo2": '',
        "photo3": '',
        "rating": 0
    }
];

const initialStateRecipeDetails:RecipeType =
    {
        "id": 1,
        "title": "",
        "description": "",
        "category": [0],
        "author": 1,
        "date_posted": "",
        "ingredients": "",
        "cooking_method": "",
        "photo1": '',
        "photo2": '',
        "photo3": '',
        "rating": 0
    };

const initialStateCat:CategoryArray = [
    {'id':0,
        'name': '',
        'description': '',
        'photo': ''}
];


export {initialStateCategory, initialState, initialStateCat, initialStateRecipeDetails}