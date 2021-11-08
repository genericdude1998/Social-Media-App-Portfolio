import React from 'react';
import { shallow } from 'enzyme';
import LoginHeader from '../../src/view/Login/LoginHeader';

let loginHeaderWrapper = shallow(
    <LoginHeader/>
);
it('should match the snapshot', () => {
    expect(loginHeaderWrapper).toMatchSnapshot();
});