import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapLogoutDispatchToProps } from '../mappers/mappers';

export const Logoutbutton = (props) => {
    const {to, className, children, onLogoutUser} = props;
    return (
        <NavLink
            className={className}
            to={to}
            onClick={onLogoutUser}
        >{children}</NavLink>
    );
}

const ConnectedLogoutButton = connect(undefined, mapLogoutDispatchToProps)(Logoutbutton);

export default ConnectedLogoutButton;
