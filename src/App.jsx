import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import ConnectedFeed from './view/Feed/Feed';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ConnectedLogin />}/>
                    <Route path='/feed' element={<ConnectedFeed/>}/>
                    <Route path='/userInfo/:id' element={}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
