import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { mapThemeDispatchToProps, mapThemeStateToProps } from '../mappers/mappers';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

const ThemeProvider = ({
    theme, onToggleTheme, children}) => 
    (
        <ThemeContext.Provider value={{onToggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );

ThemeProvider.propTypes = {
    theme: PropTypes.string,
    onToggleTheme: PropTypes.func,
    children: PropTypes.object,
}

const ConnectedThemeProvider = connect(mapThemeStateToProps,mapThemeDispatchToProps)(ThemeProvider);

export default ConnectedThemeProvider;
