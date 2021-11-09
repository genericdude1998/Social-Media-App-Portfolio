import React from 'react'
import { shallow } from 'enzyme';
import UserLink from '../../src/view/Feed/UserLink';
import {mockId, mockName} from '../mockValues';

let wrapper = shallow(
    <UserLink 
        id={mockId}
        name={mockName}
    />
)

describe('UserLink', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});