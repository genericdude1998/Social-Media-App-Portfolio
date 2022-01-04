import React from 'react';
import { shallow } from 'enzyme';
import { ThemeContext } from '../../src/view/theme/ThemeProvider';
import NavBar from '../../src/view/Feed/NavBar';
import { mockTheme } from '../mockValues';
import { NavLink } from 'react-router-dom';
import {mockActiveNavData, mockInActiveNavData} from '../mockValues';
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
    it('should have active styles when light', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'light', onToggleTheme: jest.fn()}
        });
        const wrapper = shallow(<NavBar/>);
        const feedLink = wrapper.find({to: '/feed'});
        const feedstyle = feedLink.prop('className');
        expect(feedstyle(mockActiveNavData)).toContain('active');

        const postLink = wrapper.find({to: '/createPost'});
        const postStyle = postLink.prop('className');
        expect(postStyle(mockActiveNavData)).toContain('active');
    });
    it('should have active styles when dark', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'dark', onToggleTheme: jest.fn()}
        });
        const wrapper = shallow(<NavBar/>);
        const feedLink = wrapper.find({to: '/feed'});
        const feedstyle = feedLink.prop('className');
        expect(feedstyle(mockActiveNavData)).toContain('active');

        const postLink = wrapper.find({to: '/createPost'});
        const postStyle = postLink.prop('className');
        expect(postStyle(mockActiveNavData)).toContain('active');
    });
    it('should have inactive styles when light', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'light', onToggleTheme: jest.fn()}
        });
        const wrapper = shallow(<NavBar/>);
        const feedLink = wrapper.find({to: '/feed'});
        const feedstyle = feedLink.prop('className');
        expect(feedstyle(mockInActiveNavData)).toContain('null');

        const postLink = wrapper.find({to: '/createPost'});
        const postStyle = postLink.prop('className');
        expect(postStyle(mockInActiveNavData)).toContain('null');
    });
    it('should have inactive styles when dark', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => {
            return {theme:'dark', onToggleTheme: jest.fn()}
        });
        const wrapper = shallow(<NavBar/>);
        const feedLink = wrapper.find({to: '/feed'});
        const feedstyle = feedLink.prop('className');
        expect(feedstyle(mockInActiveNavData)).toContain('null');

        const postLink = wrapper.find({to: '/createPost'});
        const postStyle = postLink.prop('className');
        expect(postStyle(mockInActiveNavData)).toContain('null');
    });
});
