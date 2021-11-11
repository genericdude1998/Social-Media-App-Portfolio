import React, { createContext } from 'react';
import { connect } from 'react-redux';
import { mapThemeDispatchToProps, mapThemeStateToProps } from '../mappers/mappers';

export const ThemeContext = createContext();

const ThemeProvider = ({theme, onToggleTheme, children}) => {
    return (
        <ThemeContext.Provider value={{onToggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );
}

const ConnectedThemeProvider = connect(mapThemeStateToProps,mapThemeDispatchToProps)(ThemeProvider);

export default ConnectedThemeProvider;
