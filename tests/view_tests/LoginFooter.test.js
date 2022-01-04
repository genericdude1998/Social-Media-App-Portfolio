import React from 'react';
import { shallow } from 'enzyme';
import LoginFooter from '../../src/view/Login/LoginFooter';

let loginFooterWrapper = shallow(
    <LoginFooter/>
);
it('should match the snapshot', () => {
    expect(loginFooterWrapper).toMatchSnapshot();
});