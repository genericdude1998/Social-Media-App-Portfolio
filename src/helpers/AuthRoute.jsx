import React from 'react';
import { Route } from 'react-router-dom';
import { Navigate, Routes } from 'react-router';


const AuthRoute = ({element: Element, token}) => {
    return (token ? Element : <Navigate to={'/notAuthorised'}/>
    );
}

export default AuthRoute;
