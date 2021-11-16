import React from 'react';
import { shallow } from 'enzyme';
import Comments from '../../src/view/Feed/Comments/Comments';
import {mockComments, mockId} from '../mockValues';

let wrapper;

describe('Comments', () => {
    it('should matchSnapshot when given an array of comments', () => {
        wrapper = shallow(
            <Comments.WrappedComponent
                comments={mockComments}
                postId={mockId}
                theme={'light'}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should matchSnapshot when given an empty array of comments', () => {
        wrapper = shallow(
            <Comments.WrappedComponent
                comments={[]}
                postId={mockId}
                theme={'light'}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
    it('should matchSnapshot when given a dark theme prop', () => {
        wrapper = shallow(
            <Comments.WrappedComponent 
                comments={mockComments}
                postId={mockId}
                theme={'dark'}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});