import React from 'react'
import { shallow } from 'enzyme';
import ConnectedFeed from '../../src/view/Feed/Feed';
import {mockPosts} from '../mockValues';

jest.spyOn(React, 'useEffect').mockImplementation(f => f());
const mockOnFetchPosts = jest.fn();

let wrapper = shallow(<ConnectedFeed.WrappedComponent
    posts={{module: mockPosts}}
    onFetchPosts={mockOnFetchPosts}
/>);

describe('Feed', () => {
    it('should call OnFetchPosts with expected params', () => {
        expect(mockOnFetchPosts).toHaveBeenCalled();
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});