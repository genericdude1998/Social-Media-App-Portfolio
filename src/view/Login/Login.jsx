import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.css';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { connect } from 'react-redux';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../mappers/mappers';

export const Login = ({
    username,
    password,
    token,
    onChangePassword,
    onChangeUsername,
}) => {
    return (
        <div className={styles.baseLogin}>
            <LoginHeader />
            <LoginForm username={username} password={password} onChangeUsername={onChangeUsername} onChangePassword={onChangePassword}/>
            <LoginFooter />
        </div>
    );
}

Login.propTypes = {
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
}

const ConnectedLogin = connect(mapLoginStateToProps, mapLoginDispatchToProps)(Login);

export default ConnectedLogin;
