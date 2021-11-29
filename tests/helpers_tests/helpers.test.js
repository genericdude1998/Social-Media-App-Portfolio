import { shallow } from 'enzyme';
import React from 'react';
import { connect } from 'react-redux';
import AuthRoute from '../../src/helpers/AuthRoute';
import { refreshPosts } from '../../src/helpers/feedHelpers';
import { Redirect } from '../../src/helpers/Redirect';
import ConnectedTokenProvider, { TokenProvider } from '../../src/helpers/TokenContextProvider';
import { mapTokenStateToProps } from '../../src/view/mappers/mappers';
import { mockPath, mockToken, mockDispatch } from '../mockValues';

const mockDoGetPostsThunk = jest.fn();

jest.mock('react-redux', () => {
    return {
        connect: jest.fn(() => {
            return jest.fn().mockImplementation(ReactComponent => {
                return ReactComponent
            });
        }) ,
        Provider: ({ children }) => children,
    }
});

describe('Redirect', () => {
    it('should matchSnapshot when not given token', () => {
        let wrapper = shallow(<Redirect token={undefined} path={mockPath}/>)
        expect(wrapper).toMatchSnapshot();
    });
    it('should matchSnapshot when given token', () => {
        let wrapper = shallow(<Redirect token={mockToken} path={mockPath}/>)
        expect(wrapper).toMatchSnapshot();
    });
});

describe('refreshPosts', () => {
    it('should call dispatch with expected params', () => {
        refreshPosts(mockDispatch, mockDoGetPostsThunk);
        expect(mockDispatch).toHaveBeenCalledWith(mockDoGetPostsThunk());
    });
});

describe('AuthRoute', () => {
    it('should render the prop element when given a token', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => mockToken);
        const wrapper = shallow(<AuthRoute element={<h1>Hello</h1>}></AuthRoute>);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render the prop element when NOT given a token', () => {
        jest.spyOn(React, 'useContext').mockImplementation(() => undefined);
        const wrapper = shallow(<AuthRoute element={<h1>Hello</h1>}></AuthRoute>);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('tokenContextProvider', () => {
    it('should call connect with correct parameters', () => {
        expect(connect).toHaveBeenCalledWith(mapTokenStateToProps);
        expect(ConnectedTokenProvider).toBe(TokenProvider);
    });
    it('should matchsnapshot', () => {
        const wrapper = shallow(<TokenProvider token={mockToken}/>)
        expect(wrapper).toMatchSnapshot();
    })
});
