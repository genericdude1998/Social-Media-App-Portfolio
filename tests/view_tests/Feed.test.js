import React from 'react'
import { shallow } from 'enzyme';
import ConnectedFeed from '../../src/view/Feed/Feed';
import {mockPosts} from '../mockValues';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());
const mockOnFetchPosts = jest.fn();

let wrapper = shallow(<ConnectedFeed.WrappedComponent
    posts={mockPosts}
    onFetchPosts={mockOnFetchPosts}
/>);

describe('Feed', () => {
    it('should call OnFetchPosts with expected params', () => {
        expect(mockOnFetchPosts).toHaveBeenCalled();
    });
    it('should match snapshot if list is not undefined', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot if list is undefined', () => {
        let wrapper = shallow(<ConnectedFeed.WrappedComponent
            posts={undefined}
            onFetchPosts={mockOnFetchPosts}
        />);
        expect(wrapper).toMatchSnapshot();
    });
});