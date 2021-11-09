import React from 'react'
import { shallow } from 'enzyme';
import Post from '../../src/view/Feed/Post';
import {mockContent, mockDate, mockName} from '../mockValues';


let wrapper = shallow(
    <Post
        name={mockName}
        content={mockContent}
        date={mockDate}
    />
);

describe('Post', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});