import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../src/view/Login/LoginForm';
import {mockOnChangeUsername, mockOnChangePassword, mockOnSubmitLogin} from '../mockValues';

let loginFormWrapper = shallow(
    <LoginForm
        onChangePassword= {mockOnChangePassword}
        onChangeUsername= {mockOnChangeUsername}
        onSubmitLogin={mockOnSubmitLogin}
    />
);
it('should match the snapshot', () => {
    expect(loginFormWrapper).toMatchSnapshot();
});