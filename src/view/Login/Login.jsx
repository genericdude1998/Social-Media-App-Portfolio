import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import styles from './Login.css';
import LoginFooter from './LoginFooter';

const Login = () => {
    return (
        <div className={styles.baseLogin}>
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
        </div>
    );
}

export default Login;
