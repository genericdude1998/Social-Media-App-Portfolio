import React from 'react';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';
import styles from './NavBar.css';

const NavBar = () => {
    return (
        <div className={styles.baseNavBar}>
            <div className={styles.baseNavBarContent}>
                <Link to='/feed' className={styles.baseNavBarLink}>Feed</Link>
                <UserLink id={1} name={'Me'} className={styles.baseNavBarLink}></UserLink>
            </div>
        </div>
    );
}

export default NavBar;
