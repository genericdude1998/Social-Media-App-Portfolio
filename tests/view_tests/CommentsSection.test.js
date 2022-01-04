import React from 'react';
import { shallow } from 'enzyme';
import ConnectedCommentSection from '../../src/view/Feed/Comments/CommentSection';
import {mockComments, mockId } from '../mockValues'

let wrapper;

jest.spyOn(React, 'useContext').mockImplementation(() => {return{
    theme: 'light',
}})

wrapper = shallow(
    <ConnectedCommentSection 
        comments={mockComments} 
        postId={mockId} 
        openComments={false} 
        onOpenComments={jest.fn()} 
        onCloseComments={jest.fn()}
    />
);

describe('CommentsSection', () => {
    it('should match snapshot when closed comments', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('should match snapshot when open comments', () => {
        wrapper.setProps({openComments:true})
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('should match snapshot when light', () => {
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('should match snapshot when dark', () => {
        wrapper.setProps({theme: 'dark'});
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('should match snapshot when given a 0 length comments array', () => {
        wrapper.setProps({comments:[]});
        expect(wrapper.dive()).toMatchSnapshot();
    });
});
