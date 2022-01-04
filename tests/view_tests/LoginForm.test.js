import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../src/view/Login/LoginForm';
import {mockOnChangeUsername, mockOnChangePassword, mockOnSubmitLogin, mockUsername, mockPassword} from '../mockValues';

let loginFormWrapper = shallow(
    <LoginForm
        username={mockUsername}
        password={mockPassword}
        onChangePassword={mockOnChangePassword}
        onChangeUsername={mockOnChangeUsername}
        onSubmitLogin={mockOnSubmitLogin}
    />
);
it('should match the snapshot', () => {
    expect(loginFormWrapper).toMatchSnapshot();
});