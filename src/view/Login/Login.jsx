import React from 'react';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import styles from './Login.css';
import LoginFooter from './LoginFooter';
import { connect } from 'react-redux';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../mappers/mappers';

const Login = () => {
    return (
        <div className={styles.baseLogin}>
            <LoginHeader />
            <LoginForm />
            <LoginFooter />
        </div>
    );
}

const ConnectedLogin = connect(mapLoginStateToProps, mapLoginDispatchToProps)(Login);

export default ConnectedLogin;
