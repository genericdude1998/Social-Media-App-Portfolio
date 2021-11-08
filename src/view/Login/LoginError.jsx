import React from 'react';
import PropTypes from 'prop-types';

const LoginError = ({error}) => {
    return (
        <div>
            {error ? error.errorMessage: null}
        </div>
    );
}

LoginError.propTypes = {
    error: PropTypes.object,
}

export default LoginError;
