import {createStore , applyMiddleware , compose} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'

const saga = createSagaMiddleware();
const store = createStore(rootReducer , window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
          applyMiddleware(saga),
          window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : applyMiddleware(saga),
    );
   
saga.run(rootSaga);
export default store;
