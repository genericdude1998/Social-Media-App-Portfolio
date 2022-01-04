import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotAuthorised.css';

const NotAuthorised = () => {
    return (
        <div className={styles.notAuth}>
            You do not have the required authorisation.
            Please go back to <Link to={'/'} className={styles.link}>Login</Link>
        </div>
    );
}

export default NotAuthorised;
