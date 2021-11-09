import React from 'react';
import { Link } from 'react-router-dom';

const UserLink = ({id, name}) => {
    return (
        <Link to={`/userInfo/${id}`}>{name}</Link>
    );
}

export default UserLink;
