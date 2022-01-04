import React from 'react'
import { shallow } from 'enzyme';
import {Post} from '../../src/view/Feed/Post';
import {mockContent, mockDate, mockName} from '../mockValues';


let wrapper = shallow(
    <Post
        name={mockName}
        content={mockContent}
        date={mockDate}
        theme={'mock_theme'}
    />
);

describe('Post', () => {
    it('should match snapshot when light', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot when dark', () => {
        let wrapper = shallow(
            <Post
                name={mockName}
                content={mockContent}
                date={mockDate}
                theme={'dark'}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});