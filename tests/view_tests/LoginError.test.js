import React from 'react';
import { shallow } from 'enzyme';
import LoginError from '../../src/view/Login/LoginError';
import {mockError} from '../mockValues';

it('should render an error message when given an error', () => {
    let loginErrorWrapper = shallow(
        <LoginError
            error={mockError.errorMessage}
        />
    );
    expect(loginErrorWrapper).toMatchSnapshot();
});
it('should render nothing when no error is given', () => {
    let loginErrorWrapper = shallow(
        <LoginError/>
    );
    expect(loginErrorWrapper).toMatchSnapshot();
});