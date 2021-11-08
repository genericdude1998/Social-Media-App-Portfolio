import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Login/LoginError.css'

const LoginError = ({error}) => {
    return (
        <div className={styles.baseError}>
            {error ? error.errorMessage: null}
        </div>
    );
}

LoginError.propTypes = {
    error: PropTypes.object,
}

export default LoginError;
