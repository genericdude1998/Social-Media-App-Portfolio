import React from 'react';
import { Link } from 'react-router-dom';

const UserLink = ({id, name}) => {
    return (
        <Link to={`/${id}`}>{name}</Link>
    );
}

export default UserLink;
