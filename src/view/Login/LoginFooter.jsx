import React from 'react';
import styles from './LoginFooter.css'

const LoginFooter = () => {
    return (
        <div className={styles.baseFooter}>
            Please type Admin as username and 1234 as password to begin!
        </div>
    );
}

export default LoginFooter;
