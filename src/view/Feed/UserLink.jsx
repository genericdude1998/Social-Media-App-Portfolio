import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const UserLink = ({id, name, className}) => {
    return (
        <Link to={`/userInfo/${id}`} className={className}>{name}</Link>
    );
}

UserLink.propTypes = {
    id:PropTypes.number,
    name:PropTypes.string,
    className:PropTypes.string,
}

export default UserLink;
