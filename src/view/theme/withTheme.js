import React, { useEffect } from 'react';
import { ThemeContext } from '../ThemeProvider';

const withTheme = (WrappedComponent) => {
    return function WithThemeHOC(props){
        const {theme} = React.useContext(ThemeContext);
        return <WrappedComponent theme = {theme} {...props}></WrappedComponent>
    }
}

export default withTheme;
