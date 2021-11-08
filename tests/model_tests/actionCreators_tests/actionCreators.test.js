import { doSetUsername, doSetPassword, doSendLoginRequest, doSendUsernameAndPasswordThunk, doLoginRequestSuccess, doLoginRequestFailure } from '../../../src/model/actionCreators/actionCreators';
import { actionTypes } from '../../../src/model/actionTypes/actionTypes';
import {mockUsername, mockPassword, correctUsername, correctPassword, mockToken, mockErrorMessage, mockEvent} from '../../mockValues';
import axios from 'axios';

const expectedSendLoginRequest = {type: actionTypes.SEND_LOGIN_REQUEST}
const expectedSetUsernameAction = {type: actionTypes.SET_USERNAME, username: mockUsername};
const expectedSetPasswordAction = {type: actionTypes.SET_PASSWORD, password: mockPassword};

const mockDispatch = jest.fn();
jest.mock('axios');

afterEach(() => {
    jest.clearAllMocks();
})

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

describe('doSendLoginRequest', () => {
    it('should return an action with expected type', () => {
        expect(doSendLoginRequest()).toEqual(expectedSendLoginRequest);
    });
});

describe('doSendUsernameAndPasswordThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doSendUsernameAndPasswordThunk(mockUsername, mockPassword);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call dispatch with SEND_LOGIN_REQUEST_OBJECT and LOGIN_REQUEST_SUCCESS when given correct credentials', () => {
        axios.post.mockImplementation(() => Promise.resolve({data: mockToken}));

        const thunk = doSendUsernameAndPasswordThunk(correctUsername,correctPassword, mockEvent);
        return thunk(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(doSendLoginRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doLoginRequestSuccess(mockToken))});
    });
    it('should call dispatch with SEND_LOGIN_REQUEST_OBJECT and LOGIN_REQUEST_FAILURE when given correct credentials', () => {
        axios.post.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doSendUsernameAndPasswordThunk(correctUsername,correctPassword, mockEvent);
        return thunk(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(doSendLoginRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doLoginRequestFailure(mockErrorMessage))});
    });
});