import React from 'react'
import { shallow } from 'enzyme';
import ConnectedApp from '../../src/App';

let wrapper = shallow(<ConnectedApp.WrappedComponent/>);

describe('App', () => {
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});