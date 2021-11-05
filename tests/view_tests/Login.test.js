import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../src/view/Login/Login';
import LoginForm from '../../src/view/Login/LoginForm';

const mockOnChangePassword = jest.fn(); 
const mockOnChangeUsername = jest.fn(); 


let loginWrapper;
beforeEach(() => {
    loginWrapper = shallow(
        <Login
            username=''
            password=''
            token={null}
            onChangePassword= {mockOnChangePassword}
            onChangeUsername= {mockOnChangeUsername}
        />
    );
});

describe('Login', () => {
    it('should pass onChange handlers to LoginForm component', () => {
        const {onChangeUsername, onChangePassword} = loginWrapper.find(LoginForm).props();
        expect(onChangeUsername).toBe(mockOnChangeUsername);
        expect(onChangePassword).toBe(mockOnChangePassword);
    });
    it('should matchsnapshot', () => {
        expect(loginWrapper).toMatchSnapshot();
    });
});
