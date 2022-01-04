import React from 'react';
import { shallow } from 'enzyme';
import NewPostCreator from '../../src/view/Feed/NewPost/NewPostCreator';
import {mockContent, mockErrorMessage} from '../mockValues';

jest.mock('react-router', () => {
    const originalModule = jest.requireActual('react-router');
  
    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        useNavigate: () => jest.fn(),
    };
});

let wrapper = shallow(
    <NewPostCreator.WrappedComponent.WrappedComponent 
        onSendNewPost={jest.fn()}
        onSetPostContent={jest.fn()}
        newPostError={mockErrorMessage}
        content={mockContent}
        theme={'light'}
    />
);

describe('NCC', () => {
    it('should matchSnapshot when light theme', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should matchSnapshot when dark theme', () => {
        wrapper.setProps({theme: 'dark'})
        expect(wrapper).toMatchSnapshot();
    });
});