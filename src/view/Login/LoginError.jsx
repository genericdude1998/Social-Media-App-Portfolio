import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Login/LoginError.css'

const LoginError = ({error}) => {
    return (
        <div className={styles.baseError}>
            {error ? error: null}
        </div>
    );
}

LoginError.propTypes = {
    error: PropTypes.string,
}

export default LoginError;
