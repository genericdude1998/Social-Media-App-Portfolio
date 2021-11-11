import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import ConnectedFeed from './view/Feed/Feed';
import ConnectedUser from './view/UsersInfo/User';
import NavBar from './view/Feed/NavBar';
import ConnectedNPC from './view/Feed/NewPost/NewPostCreator';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ConnectedLogin />}/>
                    <Route path='/feed' element=
                        {
                            <>
                                <NavBar/>
                                <ConnectedFeed/>
                            </>
                        }  
                    />
                    <Route path='/userInfo/:id' element=
                        {
                            <>
                                <NavBar/>
                                <ConnectedUser/>
                            </>
                        }/>
                    <Route path='/createPost' element={
                        <>
                            <NavBar/>
                            <ConnectedNPC/>
                        </>
                    }/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
