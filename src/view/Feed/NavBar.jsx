import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserLink from './UserLink';
import styles from './NavBar.css';
import { ThemeContext } from '../theme/ThemeProvider';
import Logo from '../../../assets/Logo.png';

const NavBar = () => {
    const {theme, onToggleTheme} = React.useContext(ThemeContext);
    return (
        <div className={`${styles.baseNavBar} ${theme === 'dark' ? styles.dark : null}`}>
            <img src={Logo} className={styles.logo}/>
            <div className={`${styles.baseNavBarContent} ${theme === 'dark' ? styles.dark : null}`}>
                <NavLink 
                    to='/feed' 
                    className={(navData) => {
                        return `${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null}
                        ${navData.isActive ? styles.active : null}`
                    }}
                >Feed</NavLink>
                <NavLink 
                    to='/createPost' 
                    className={(navData) => `${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null} ${navData.isActive ? styles.active : null}`}
                >Create New Post</NavLink>
                <UserLink 
                    id={1} 
                    name={'Me'} 
                    className={`${styles.baseNavBarLink} ${theme === 'dark' ? styles.dark : null}`} />
                <NavLink 
                    to='/' 
                    className={`${styles.logout} ${theme === 'dark' ? styles.dark : null}`}
                >Log Out</NavLink>
                <button className={styles.baseToggleThemeButton} onClick={onToggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
}

export default NavBar;
