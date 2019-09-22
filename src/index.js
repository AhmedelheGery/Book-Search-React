import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//__________________________________________________
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//__________________________________________________
import store from './store'
import App from './components/App';

ReactDOM.render( <Provider store={store}><App /></Provider>,
     document.getElementById('root')
);

