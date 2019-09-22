// IMPORT-EFFECTS
import { call, put , takeEvery} from 'redux-saga/effects';
// IMPORT API
import BooksAPI from '../API/googleBooks'
// IMPORT ACTIONS TYPES
import {FETCH_BOOKS_SAGA} from '../constants/actionTypes'
// IMPORT SUCCESS-ACTIONS-CREATOR
import { fetchBooksSuccess } from '../actions'

// FETCH-BOOKS-SAGA-WORKER
function *FetchBooks(action){
    const {value} = action ;
    console.log(value)
    const response = yield call(BooksAPI.getBooks , value);
    console.log(response)
    // console.log(response.data.items);
    const payload = response.data.items;
    yield put( fetchBooksSuccess(payload) );
}
// SAGAS-WATCHERS
export default function *watchSagas(){
    yield takeEvery(FETCH_BOOKS_SAGA, FetchBooks)
}
