import { doSetUsername, doSetPassword, doSendLoginRequest, doLoginRequestSuccess, doLoginRequestFailure } from '../../../src/model/actionCreators/actionCreators';
import { mockPassword, mockUsername, mockLoginReducerInitialState, mockToken, mockErrorMessage } from '../../mockValues';
import { loginReducer } from '../../../src/model/reducers/reducers';
import { applyLoginRequestFailure, applyLoginRequestSuccess, applySendLoginRequest, applySetPassword, applySetUsername } from '../../../src/model/appliers/loginReducerAppliers';

jest.mock('../../../src/model/appliers/loginReducerAppliers');

const setUsernameAction = doSetUsername(mockUsername);
const setPasswordAction = doSetPassword(mockPassword);
const sendLoginRequestAction = doSendLoginRequest();
const loginRequestSuccessAction = doLoginRequestSuccess(mockToken);
const loginRequestFailureAction = doLoginRequestFailure(mockErrorMessage);

const defaultAction = {type: 'default'}

describe('loginReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(loginReducer(undefined,undefined)).toEqual(mockLoginReducerInitialState);
    });
    it('should call applySetUsername with expected params when given SET_USERNAME action', () => {
        loginReducer(mockLoginReducerInitialState, setUsernameAction);
        expect(applySetUsername).toHaveBeenCalledWith(mockLoginReducerInitialState, setUsernameAction);
    });
    it('should call applySetPassword with expected params when given SET_PASSWORD action', () => {
        loginReducer(mockLoginReducerInitialState, setPasswordAction);
        expect(applySetPassword).toHaveBeenCalledWith(mockLoginReducerInitialState, setPasswordAction);
    });
    it('should call applySendLoginRequest with expected params when given SEND_LOGIN_REQUEST action', () => {
        loginReducer(mockLoginReducerInitialState, sendLoginRequestAction);
        expect(applySendLoginRequest).toHaveBeenCalledWith(mockLoginReducerInitialState);
    });
    it('should call applyLoginRequestSuccess with expected params when given LOGIN_REQUEST_SUCCESS action', () => {
        loginReducer(mockLoginReducerInitialState, loginRequestSuccessAction);
        expect(applyLoginRequestSuccess).toHaveBeenCalledWith(mockLoginReducerInitialState, loginRequestSuccessAction);
    });
    it('should call applyLoginRequestFailure with expected params when given LOGIN_REQUEST_FAILURE action', () => {
        loginReducer(mockLoginReducerInitialState, loginRequestFailureAction);
        expect(applyLoginRequestFailure).toHaveBeenCalledWith(mockLoginReducerInitialState, loginRequestFailureAction);
    });
    it('should return initial state when default case', () => {
        expect(loginReducer(mockLoginReducerInitialState, defaultAction)).toBe(mockLoginReducerInitialState);
    });
});