import {
    SEARCH_VAL,
    FETCH_BOOKS_SAGA,
    FETCH_BOOKS
} from '../constants/actionTypes'

// ACTION CREATOR => SEARCH-INPUT-VALUE
export const searchValue = (val = '') => {
    return{type  : SEARCH_VAL, payload : val}}

// ACTION CREATOR => GET-BOOKS-SAGA
export const fetchBooks = (value) => { return {type : FETCH_BOOKS_SAGA  , value} }

// ACTION CREATOR => GET-BOOKS-SUCCESS
export const fetchBooksSuccess = payload => { return {type : FETCH_BOOKS , payload} }

