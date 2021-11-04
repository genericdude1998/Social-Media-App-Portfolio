import { doSetUsername, doSetPassword } from '../../../src/model/actionCreators/actionCreators';
import { actionTypes } from '../../../src/model/actionTypes/actionTypes';
import {mockUsername, mockPassword} from '../../mockValues';

const expectedSetUsernameAction = {type: actionTypes.SET_USERNAME, username: mockUsername};
const expectedSetPasswordAction = {type: actionTypes.SET_PASSWORD, password: mockPassword};

describe('doSetUsername', () => {
    it('should return an action object with expected type and username payload', () => {
        expect(doSetUsername(mockUsername)).toEqual(expectedSetUsernameAction);
    });
});

describe('doSetPassword', () => {
    it('should return an action object with expected type and password payload', () => {
        expect(doSetPassword(mockPassword)).toEqual(expectedSetPasswordAction);
    });
});