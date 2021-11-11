import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import ConnectedFeedWithTheme from './view/Feed/Feed';
import ConnectedUser from './view/UsersInfo/User';
import NavBar from './view/Feed/NavBar';
import ConnectedNPC from './view/Feed/NewPost/NewPostCreator';
import ConnectedThemeProvider from './view/ThemeProvider';

const App = () => {
    return (
        <div>
            <ConnectedThemeProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<ConnectedLogin />}/>
                        <Route path='/feed' element=
                            {
                                <>
                                    <NavBar/>
                                    <ConnectedFeedWithTheme/>
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
            </ConnectedThemeProvider>
        </div>
    );
}

export default App;
