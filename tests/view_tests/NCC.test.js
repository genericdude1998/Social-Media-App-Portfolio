import React from "react";
import { shallow } from "enzyme";
import NewCommentCreator from "../../src/view/Feed/Comments/NewCommentCreator";
import {mockContent, mockId} from '../mockValues';

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
    <NewCommentCreator.WrappedComponent.WrappedComponent 
        onSendNewComment={jest.fn()}
        onSetCommentContent={jest.fn()}
        content={mockContent}
        postId={mockId}
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