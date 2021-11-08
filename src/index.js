import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedLogin from './view/Login/Login';
import {store} from './model/store/store';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Feed from './view/Feed/Feed';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ConnectedLogin />}/>
                <Route path='/feed' element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));