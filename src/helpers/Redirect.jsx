import React from 'react';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

export const Redirect = ({token, path}) => {
    return (token ? <Navigate to={path}/>:null);
}

Redirect.propTypes = {
    token: PropTypes.string,
    path:PropTypes.string.isRequired,
}