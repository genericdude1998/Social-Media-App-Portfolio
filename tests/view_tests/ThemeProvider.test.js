import React, { Children } from 'react';
import { shallow } from 'enzyme';
import ConnectedThemeProvider, { ThemeProvider } from '../../src/view/theme/ThemeProvider';
import { mockTheme } from '../mockValues';

let wrapper;
const mockOnToggleTheme = jest.fn();

wrapper = shallow(
    <ConnectedThemeProvider.WrappedComponent
        theme={mockTheme}
        onToggleTheme={mockOnToggleTheme}  
    />
);

console.log(wrapper.debug());

describe('ThemeProvider', () => {
    it('should pass down theme variable to ThemeContextProvider and onToggleTheme', () => {
        expect(wrapper.prop('value').theme).toBe(mockTheme);
        expect(wrapper.prop('value').onToggleTheme).toBe(mockOnToggleTheme);
    });
    it('should matchSnapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});