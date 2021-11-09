import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.css';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginFooter from './LoginFooter';
import { connect } from 'react-redux';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../mappers/mappers';
import LoginError from './LoginError';
import { Redirect } from '../../helpers/Redirect';

const Login = ({
    username,
    password,
    token,
    error,
    onChangePassword,
    onChangeUsername,
    onSubmitLogin,
}) => {
    return (
        <div className={styles.baseLogin}>
            <LoginHeader />
            <LoginForm 
                username={username} 
                password={password} 
                onChangeUsername={onChangeUsername} 
                onChangePassword={onChangePassword}
                onSubmitLogin={onSubmitLogin}
            />
            <LoginError error={error}/>
            <LoginFooter />
            <Redirect token={token} path='/feed'/>
        </div>
    );
}

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    token: PropTypes.string,
    error: PropTypes.string,
    onChangeUsername: PropTypes.func.isRequired,
    onChangePassword: PropTypes.func.isRequired,
    onSubmitLogin: PropTypes.func.isRequired,
}

const ConnectedLogin = connect(mapLoginStateToProps, mapLoginDispatchToProps)(Login);

export default ConnectedLogin;
