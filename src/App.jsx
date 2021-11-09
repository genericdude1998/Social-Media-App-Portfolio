import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import ConnectedFeed from './view/Feed/Feed';
import { connect } from 'react-redux';
import { mapAppStateToProps } from './view/mappers/mappers';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ConnectedLogin />}/>
                    <Route path='/feed' element={<ConnectedFeed/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const ConnectedApp = connect(mapAppStateToProps)(App);

export default ConnectedApp;
