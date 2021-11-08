import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './model/store/store';
import App from './App';


ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById('root'));