import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext } from '../../src/view/ThemeProvider';
import NavBar from '../../src/view/Feed/NavBar';
import { mockTheme } from '../mockValues';

jest.spyOn(React, 'useContext').mockImplementation((context) => {
    return {theme:mockTheme, onToggleTheme: jest.fn()}
});
const NavBarWrapper = shallow(
    <NavBar/>
);

describe('NavBar', () => {
    it('should call useContext with expected params', () => {
        expect(React.useContext).toHaveBeenCalledWith(ThemeContext); 
    });
    it('should match Snapshot when theme is light', () => {
        jest.spyOn(React, 'useContext').mockImplementation((context) => {
            return {theme:'light', onToggleTheme: jest.fn()}
        });
        const NavBarWrapper = shallow(
            <NavBar/>
        );
        expect(NavBarWrapper).toMatchSnapshot();
    });
    it('should match Snapshot when theme is dark', () => {
        jest.spyOn(React, 'useContext').mockImplementation((context) => {
            return {theme:'dark', onToggleTheme: jest.fn()}
        });
        const NavBarWrapper = shallow(
            <NavBar/>
        );
        expect(NavBarWrapper).toMatchSnapshot();
    });
});
