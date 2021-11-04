import { doSetUsername, doSetPassword } from '../../../src/model/actionCreators/actionCreators';
import { actionTypes } from '../../../src/model/actionTypes/actionTypes';

const mock_username = 'username';
const expectedSetUsernameAction = {type: actionTypes.SET_USERNAME, username: mock_username};
const mock_password = 'password';
const expectedSetPasswordAction = {type: actionTypes.SET_PASSWORD, password: mock_password};

describe('doSetUsername', () => {
    it('should return an action object with expected type and username payload', () => {
        expect(doSetUsername(mock_username)).toEqual(expectedSetUsernameAction);
    });
});

describe('doSetPassword', () => {
    it('should return an action object with expected type and password payload', () => {
        expect(doSetPassword(mock_password)).toEqual(expectedSetPasswordAction);
    });
});