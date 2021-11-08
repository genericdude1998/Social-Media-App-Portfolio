import { shallow } from 'enzyme';
import React from 'react';
import { Redirect } from '../../src/helpers/Redirect';
import { mockPath, mockToken } from '../mockValues';


describe('Redirect', () => {
    it('should matchSnapshot when not given token', () => {
        let wrapper = shallow(<Redirect token={undefined} path={mockPath}/>)
        expect(wrapper).toMatchSnapshot();
    });
    it('should matchSnapshot when given token', () => {
        let wrapper = shallow(<Redirect token={mockToken} path={mockPath}/>)
        expect(wrapper).toMatchSnapshot();
    });
});