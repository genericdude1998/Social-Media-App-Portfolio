import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedLogin from './view/Login/Login';
import {store} from './model/store/store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ConnectedLogin />}/>
            </Routes>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));