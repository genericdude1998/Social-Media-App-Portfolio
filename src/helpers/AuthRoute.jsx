import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';
import { TokenContext } from './TokenContextProvider';


const AuthRoute = ({element: Element}) => {
    const token = React.useContext(TokenContext);
    console.log(token);
    return (token ? Element : <Navigate to={'/notAuthorised'}/>
    );
}

export default AuthRoute;
