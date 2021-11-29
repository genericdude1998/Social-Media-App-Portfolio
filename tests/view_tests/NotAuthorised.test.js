import React from 'react';
import { shallow } from 'enzyme';
import NotAuthorised from '../../src/view/NotAuthorised';

describe('NotAuthorised', () => {
    it('should match snap', () => {
        const wrapper = shallow(<NotAuthorised />);
        expect(wrapper).toMatchSnapshot();
    });
});