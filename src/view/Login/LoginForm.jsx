import React from 'react';
import styles from './LoginForm.css';
import PropTypes from 'prop-types';

const LoginForm = ({
    username,
    password,
    onChangeUsername,
    onChangePassword,
    onSubmitLogin,
}) => {
    return (
        <form className={styles.baseForm} onSubmit={onSubmitLogin(username, password)}>
            <label className={styles.baseLabel}>Username:</label>
            <input type='text' className={styles.baseInput} onChange={onChangeUsername}/>
            <label className={styles.baseLabel}>Password:</label>
            <input type='password'className={styles.baseInput} onChange={onChangePassword}/>
            <button type='submit' className={styles.baseButton}>Login</button>
        </form>
    );
}

LoginForm.propTypes = {
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
}

export default LoginForm;
