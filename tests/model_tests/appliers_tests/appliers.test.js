import { applySetUsername, applySetPassword, applySendLoginRequest, applyLoginRequestSuccess, applyLoginRequestFailure } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword, doLoginRequestSuccess, doLoginRequestFailure } from '../../../src/model/actionCreators/actionCreators';
import {mockInitialState, mockUsername, mockPassword, mockToken, mockErrorMessage} from '../../mockValues';

const mockLoginSuccessState = {...mockInitialState, token: mockToken};
const mockLoginFailureState = {...mockInitialState, error: mockErrorMessage};


describe('applySetUsername', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetUsername(mockInitialState, doSetUsername(mockUsername))).toEqual({...mockInitialState, username:mockUsername});
    });
});

describe('applySetPassword', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetPassword(mockInitialState, doSetPassword(mockPassword))).toEqual({...mockInitialState, password:mockPassword});
    });
});

describe('applySendLoginRequest', () => {
    it('should return state unchanged', () => {
        expect(applySendLoginRequest(mockInitialState)).toEqual(mockInitialState);
    });
});

describe('applyLoginRequestSuccess', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestSuccess(mockInitialState, doLoginRequestSuccess(mockToken))).toEqual(mockLoginSuccessState);
    });
});

describe('applyLoginRequestFailure', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestFailure(mockInitialState, doLoginRequestFailure(mockErrorMessage))).toEqual(mockLoginFailureState);
    });
});