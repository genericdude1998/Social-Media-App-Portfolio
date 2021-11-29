import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './NavBar.css';


const UserLink = ({id, name, className}) => {
    return (
        <NavLink to={`/userInfo/${id}`} className={(navData) => `${className} ${navData.isActive ? styles.active : null}`}>
            {name}
        </NavLink>
    );
}

UserLink.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    className:PropTypes.string,
}

export default UserLink;
