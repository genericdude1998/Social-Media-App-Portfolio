import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import {store} from '../../src/model/store/store';
import ConnectedLogin from '../../src/view/Login/Login';
import LoginForm from '../../src/view/Login/LoginForm';
import {mockOnChangeUsername, mockOnChangePassword, mockOnSubmitLogin} from '../mockValues';


// jest.mock('react-redux', () => {
//     return {
//         connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
//             mapStateToProps,
//             mapDispatchToProps,
//             ReactComponent,
//         }),
//         Provider: ({ children }) => children,
//     }
// })

let loginWrapper;
beforeEach(() => {
    loginWrapper = shallow(
        <ConnectedLogin.WrappedComponent
            username=''
            password=''
            token={null}
            onChangePassword= {mockOnChangePassword}
            onChangeUsername= {mockOnChangeUsername}
            onSubmitLogin= {mockOnSubmitLogin}
        />
    );
});



describe('Login', () => {
    it('should pass onChange handlers to LoginForm component', () => {
        const {onChangeUsername, onChangePassword, onSubmitLogin} = loginWrapper.find(LoginForm).props();
        expect(onChangeUsername).toBe(mockOnChangeUsername);
        expect(onChangePassword).toBe(mockOnChangePassword);
        expect(onSubmitLogin).toBe(mockOnSubmitLogin);
    });
    it('should matchsnapshot', () => {
        expect(loginWrapper).toMatchSnapshot();
    });
});
