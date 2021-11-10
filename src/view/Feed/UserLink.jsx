import React from 'react';
import { Link } from 'react-router-dom';

const UserLink = ({id, name, className}) => {
    return (
        <Link to={`/userInfo/${id}`} className={className}>{name}</Link>
    );
}

export default UserLink;
