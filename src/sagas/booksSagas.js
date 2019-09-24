// IMPORT-EFFECTS
import { call, put , takeEvery} from 'redux-saga/effects';
// IMPORT API
import BooksAPI from '../API/googleBooks'
// IMPORT ACTIONS TYPES
import {FETCH_BOOKS_SAGA} from '../constants/actionTypes'
// IMPORT SUCCESS-ACTIONS-CREATOR
import { fetchBooksSuccess , setError } from '../actions'

// FETCH-BOOKS-SAGA-WORKER
function *FetchBooks(action){
    try {
        const {value} = action ;
        if (value){
            const response = yield call(BooksAPI.getBooks , value);
            const payload = response.data.items;
            console.log(payload)
            yield put( fetchBooksSuccess(payload) );
        }else {
            alert('You can\'t search for empty value!');
        }
    } catch (error) {
        yield put(setError(error.toString()));
    }    
}
// SAGAS-WATCHERS
export default function *watchSagas(){
    yield takeEvery(FETCH_BOOKS_SAGA, FetchBooks)
}
