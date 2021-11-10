import React from 'react';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';

const NavBar = () => {
    return (
        <div>
            <Link to='/feed'>Feed</Link>
            <UserLink id={1} name={'Me'}></UserLink>
        </div>
    );
}

export default NavBar;
