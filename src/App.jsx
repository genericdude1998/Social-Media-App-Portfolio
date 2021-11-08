import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import Feed from './view/Feed/Feed';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ConnectedLogin />}/>
                    <Route path='/feed' element={<Feed/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
