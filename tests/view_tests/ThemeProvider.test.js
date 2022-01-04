import React from 'react';
import { shallow } from 'enzyme';
import ConnectedThemeProvider from '../../src/view/theme/ThemeProvider';
import { mockTheme } from '../mockValues';

let wrapper;
const mockOnToggleTheme = jest.fn();

wrapper = shallow(
    <ConnectedThemeProvider.WrappedComponent
        theme={mockTheme}
        onToggleTheme={mockOnToggleTheme}  
    />
);

describe('ThemeProvider', () => {
    it('should pass down theme variable to ThemeContextProvider and onToggleTheme', () => {
        expect(wrapper.prop('value').theme).toBe(mockTheme);
        expect(wrapper.prop('value').onToggleTheme).toBe(mockOnToggleTheme);
    });
    it('should matchSnapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});