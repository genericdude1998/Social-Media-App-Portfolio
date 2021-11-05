import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedLogin from './view/Login/Login';
import {store} from './model/store/store';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedLogin />
    </Provider>
    , document.getElementById('root'));