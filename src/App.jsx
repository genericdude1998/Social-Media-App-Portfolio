import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ConnectedLogin from './view/Login/Login';
import ConnectedFeedWithTheme from './view/Feed/Feed';
import ConnectedUser from './view/UsersInfo/User';
import NavBar from './view/Feed/NavBar';
import ConnectedNPC from './view/Feed/NewPost/NewPostCreator';
import ConnectedThemeProvider from './view/theme/ThemeProvider';
import AuthRoute from './helpers/AuthRoute';
import ConnectedTokenProvider from './helpers/TokenContextProvider';
import NotAuthorised from './view/NotAuthorised';

const App = () => {
    return (
        <div>
            <ConnectedTokenProvider>
                <ConnectedThemeProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<ConnectedLogin />}/>
                            <Route path='/feed' element={
                                <AuthRoute element={
                                    <>
                                        <NavBar/>
                                        <ConnectedFeedWithTheme/>
                                    </> }
                                />
                            }
                            />
                            <Route path='/userInfo/:id' element=
                                {
                                    <AuthRoute
                                        element={
                                            <>
                                                <NavBar/>
                                                <ConnectedUser/>
                                            </>
                                        }
                                    />
                                }/>
                            <Route path='/createPost' element={
                                <AuthRoute
                                    element={
                                        <>
                                            <NavBar/>
                                            <ConnectedNPC/>
                                        </>
                                    }
                                />
                            }/>
                            <Route  path='/notAuthorised' element={<NotAuthorised/>}/>
                        </Routes>
                    </BrowserRouter>
                </ConnectedThemeProvider>
            </ConnectedTokenProvider>
        </div>
    );
}

export default App;
