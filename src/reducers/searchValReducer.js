import {
    SEARCH_VAL,
} from '../constants/actionTypes'
const searchValReducer = (state = '' , action) => {
    if(action.type === SEARCH_VAL){
        return action.payload;
    }
        return state;
}

export default searchValReducer