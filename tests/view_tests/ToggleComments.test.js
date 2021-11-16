import React from "react";
import { shallow } from "enzyme";
import ToggleComments from "../../src/view/Feed/Comments/ToggleComments";
import {mockContent, mockId} from '../mockValues';

const mockOnCloseComments = jest.fn();
const mockOnOpenComments = jest.fn();

let wrapper =  shallow(
    <ToggleComments
        postId={mockId}
        openComments={true}
        onOpenComments={mockOnOpenComments}
        onCloseComments={mockOnCloseComments}
    />
)

describe('ToggleComments', () => {
    it('should match snap when given true open comments', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should run onOpenComments with expected params when clicked', () => {
        wrapper.find('button').simulate('click');
        expect(mockOnCloseComments).toHaveBeenCalledWith(mockId)
    });
    it('should match snap when given false open comments', () => {
        wrapper.setProps({openComments:false})
        expect(wrapper).toMatchSnapshot();
    });
    it('should run onCloseComments with expected params when clicked', () => {
        wrapper.find('button').simulate('click');
        expect(mockOnOpenComments).toHaveBeenCalledWith(mockId)
    });
});