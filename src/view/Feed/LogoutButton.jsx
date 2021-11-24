import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mapLogoutDispatchToProps } from '../mappers/mappers';

const Logoutbutton = (props) => {
    const {children, onLogoutUser} = props;
    return (
        <NavLink
            onClick={onLogoutUser}
            {...props}
        >{children}</NavLink>
    );
}

const ConnectedLogoutButton = connect(undefined, mapLogoutDispatchToProps)(Logoutbutton);

export default ConnectedLogoutButton;
