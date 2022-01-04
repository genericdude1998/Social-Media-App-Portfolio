import React from 'react'
import { shallow } from 'enzyme';
import UserLink from '../../src/view/Feed/UserLink';
import {mockId, mockName} from '../mockValues';
import { NavLink } from 'react-router-dom';
import {mockActiveNavData, mockInActiveNavData} from '../mockValues';

let wrapper = shallow(
    <UserLink 
        id={mockId}
        name={mockName}
        className={'mockClass'}
    />
)

describe('UserLink', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should have active styles', () => {
        const navLinkClassnameFunc  =  wrapper.find(NavLink).prop('className');
        expect(navLinkClassnameFunc(mockActiveNavData)).toContain('active');
    });
    it('should have inactive styles', () => {
        const navLinkClassnameFunc  =  wrapper.find(NavLink).prop('className');
        expect(navLinkClassnameFunc(mockInActiveNavData)).toContain('null');
    });
});