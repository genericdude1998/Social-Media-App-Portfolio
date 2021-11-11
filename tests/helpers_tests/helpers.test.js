import { shallow } from 'enzyme';
import React from 'react';
import { refreshPosts } from '../../src/helpers/feedHelpers';
import { Redirect } from '../../src/helpers/Redirect';
import { mockPath, mockToken, mockDispatch } from '../mockValues';

const mockDoGetPostsThunk = jest.fn();

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
