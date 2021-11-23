import React from 'react';
import styles from './LoginHeader.css'
import logo from '../../../assets/Logo.png'

const LoginHeader = () => {
    return (
        <div className={styles.baseLoginHeader}>
            <img src={logo} alt="" />
        </div>
    );
}

export default LoginHeader;
