import React from 'react';
import { ThemeContext } from '../ThemeProvider';

const withTheme = (WrappedComponent) => {
    return function WithThemeHOC(){
        const {theme} = React.useContext(ThemeContext);
        return <WrappedComponent theme = {theme}></WrappedComponent>
    }
}

export default withTheme;
