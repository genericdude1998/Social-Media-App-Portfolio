import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext } from '../../src/view/theme/ThemeProvider';
import NavBar from '../../src/view/Feed/NavBar';
import { mockTheme } from '../mockValues';

jest.spyOn(React, 'useContext').mockImplementation(() => {
    return {theme:mockTheme, onToggleTheme: jest.fn()}
});

describe('NavBar', () => {
    it('should call useContext with expected params', () => {
        shallow(<NavBar/>);
        expect(React.useContext).toHaveBeenCalledWith(ThemeContext); 
    });
    it('should match Snapshot when theme is light', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'light', onToggleTheme: jest.fn()}
        });
        const NavBarWrapper = shallow(
            <NavBar/>
        );
        expect(NavBarWrapper).toMatchSnapshot();
    });
    it('should match Snapshot when theme is dark', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'dark', onToggleTheme: jest.fn()}
        });
        const NavBarWrapper = shallow(
            <NavBar/>
        );
        expect(NavBarWrapper).toMatchSnapshot();
    });
});
