import React from 'react'
import { shallow } from 'enzyme';
import App from '../../src/App';

let wrapper = shallow(<App/>);

describe('App', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});