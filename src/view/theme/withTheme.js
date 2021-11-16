import React, { useEffect } from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

const withTheme = (WrappedComponent) => {
    const WithThemeHOC = (props) => {
        const {theme} = React.useContext(ThemeContext);
        return <WrappedComponent theme = {theme} {...props}></WrappedComponent>
    }

    WithThemeHOC.WrappedComponent = WrappedComponent;
    return WithThemeHOC
}

export default withTheme;
