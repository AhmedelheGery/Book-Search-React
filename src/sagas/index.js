import { all } from 'redux-saga/effects';

import WatchSagas from './booksSagas';

export default function* rootSaga() {
    yield all([WatchSagas()]);
}