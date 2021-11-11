import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';
import styles from './NavBar.css';
import { ThemeContext } from '../ThemeProvider';

const NavBar = () => {
    const {theme, onToggleTheme} = useContext(ThemeContext)
    return (
        <div className={styles.baseNavBar}>
            <div className={styles.baseNavBarContent}>
                <Link to='/feed' className={styles.baseNavBarLink}>Feed</Link>
                <Link to='/createPost' className={styles.baseNavBarLink}>Create New Post</Link>
                <UserLink id={1} name={'Me'} className={styles.baseNavBarLink}></UserLink>
                <button onClick={onToggleTheme}>Toggle Dark/Light Theme</button>
            </div>
        </div>
    );
}

export default NavBar;
