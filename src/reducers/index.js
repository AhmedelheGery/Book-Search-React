import { combineReducers } from 'redux'
import { reducer as formReducer} from 'redux-form'
import searchValReducer from './searchValReducer'
import {booksReducer} from './booksReducer'

const rootReducer =  combineReducers(
    { 
        form : formReducer ,
        searchVal : searchValReducer ,
        books : booksReducer
    }
);

export default rootReducer;