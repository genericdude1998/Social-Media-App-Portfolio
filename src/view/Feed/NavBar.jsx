import React from 'react';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';

const NavBar = ({id, name}) => {
    return (
        <div>
            <Link to='/feed'>Feed</Link>
            <UserLink id={id} name={name}></UserLink>
        </div>
    );
}

export default NavBar;
