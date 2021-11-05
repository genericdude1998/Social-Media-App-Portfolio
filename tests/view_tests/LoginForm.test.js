import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../src/view/Login/LoginForm';
import {mockOnChangeUsername, mockOnChangePassword} from '../mockValues';

let loginFormWrapper = shallow(
    <LoginForm
        onChangePassword= {mockOnChangePassword}
        onChangeUsername= {mockOnChangeUsername}
    />
);
it('should match the snapshot', () => {
    expect(loginFormWrapper).toMatchSnapshot();
});