import React, { createContext } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapTokenStateToProps } from '../view/mappers/mappers';

export const TokenContext = createContext();

const TokenProvider = ({token, children}) => 
    (
        <TokenContext.Provider value={'Sample Token'}>
            {children}
        </TokenContext.Provider>
    );

TokenProvider.propTypes = {
    token: PropTypes.string,
}

const ConnectedTokenProvider = connect(mapTokenStateToProps)(TokenProvider);

export default ConnectedTokenProvider;