import React from 'react';
import { Link } from 'react-router-dom';
import UserLink from './UserLink';
import styles from './NavBar.css';
import { ThemeContext } from '../theme/ThemeProvider';
import Logo from '../../../assets/Logo.png';

const NavBar = () => {
    const {theme, onToggleTheme} = React.useContext(ThemeContext)
    return (
        <div className={`${styles.baseNavBar} ${theme === 'dark' ? styles.dark : null}`}>
            <img src={Logo} className={styles.logo}/>
            <div className={`${styles.baseNavBarContent} ${theme === 'dark' ? styles.dark : null}`}>
                <Link to='/feed' className={`${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null}`}>Feed</Link>
                <Link to='/createPost' className={`${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null}`}>Create New Post</Link>
                <UserLink id={1} name={'Me'} className={`${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null}`}></UserLink>
                <button className={styles.baseToggleThemeButton} onClick={onToggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
}

export default NavBar;
