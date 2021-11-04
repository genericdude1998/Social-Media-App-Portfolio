import { doSetUsername, doSetPassword } from '../../../src/model/actionCreators/actionCreators';
import { mockPassword, mockUsername, mockLoginReducerInitialState } from '../../mockValues';
import { loginReducer } from '../../../src/model/reducers/reducers';
import { applySetPassword, applySetUsername } from '../../../src/model/appliers/loginReducerAppliers';

jest.mock('../../../src/model/appliers/loginReducerAppliers');

const setUsernameAction = doSetUsername(mockUsername);
const setPasswordAction = doSetPassword(mockPassword);
const defaultAction = {type: 'default'}

describe('loginReducer', () => {
    it('should call applySetUsername with expected params when given SET_USERNAME action', () => {
        loginReducer(mockLoginReducerInitialState, setUsernameAction);
        expect(applySetUsername).toHaveBeenCalledWith(mockLoginReducerInitialState, setUsernameAction);
    });
    it('should call applySetPassword with expected params when given SET_PASSWORD action', () => {
        loginReducer(mockLoginReducerInitialState, setPasswordAction);
        expect(applySetPassword).toHaveBeenCalledWith(mockLoginReducerInitialState, setPasswordAction);
    });
    it('should return initial state when default case', () => {
        expect(loginReducer(mockLoginReducerInitialState, defaultAction)).toBe(mockLoginReducerInitialState);
    });
});