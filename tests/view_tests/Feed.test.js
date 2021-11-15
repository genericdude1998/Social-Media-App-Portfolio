import React from 'react'
import { shallow } from 'enzyme';
import {mockPosts} from '../mockValues';
import {Feed} from '../../src/view/Feed/Feed';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());
jest.mock('../../src/view/theme/withTheme', () => {
    const originalModule = jest.requireActual('../../src/view/theme/withTheme');
    return {
        __esModule: true,
        ...originalModule,
        default: jest.fn((WrappedComponent) => WrappedComponent),
    };
});
const mockOnFetchPosts = jest.fn();

let wrapper = shallow(
    <Feed
        posts = {mockPosts}
        onFetchPosts = {mockOnFetchPosts}
        theme = {'mock_theme'}
    />);

describe('Feed', () => {
    it('should call OnFetchPosts with expected params', () => {
        expect(mockOnFetchPosts).toHaveBeenCalled();
    });
    it('should match snapshot if list is not undefined', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot if list is undefined', () => {
        let wrapper = shallow(<Feed
            posts={undefined}
            onFetchPosts={mockOnFetchPosts}
            theme={'mock_theme'}
        />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot if theme is light', () => {
        let wrapper = shallow(
            <Feed
                posts = {mockPosts}
                onFetchPosts = {mockOnFetchPosts}
                theme = {'light'}
            />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot if theme is dark', () => {
        let wrapper = shallow(
            <Feed
                posts = {mockPosts}
                onFetchPosts = {mockOnFetchPosts}
                theme = {'dark'}
            />);
        expect(wrapper).toMatchSnapshot();
    });
});