import {FETCH_BOOKS} from '../constants/actionTypes'

 export const booksReducer = (state = {} , action) => {
     switch(action.type){
         case FETCH_BOOKS :
                return {...state , booksList : action.payload};
        default : 
        return state ;
     }  
}


