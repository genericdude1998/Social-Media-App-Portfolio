import { applySetUsername, applySetPassword, applySendLoginRequest, applyLoginRequestSuccess, applyLoginRequestFailure } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword, doLoginRequestSuccess, doLoginRequestFailure } from '../../../src/model/actionCreators/actionCreators';
import {mockUsername, mockPassword, mockToken, mockErrorMessage, mockLoginReducerInitialState} from '../../mockValues';

const mockLoginSuccessState = {...mockLoginReducerInitialState, token: mockToken};
const mockLoginFailureState = {...mockLoginReducerInitialState, error: mockErrorMessage};


describe('applySetUsername', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetUsername(mockLoginReducerInitialState, doSetUsername(mockUsername))).toEqual({...mockLoginReducerInitialState, username:mockUsername});
    });
});

describe('applySetPassword', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetPassword(mockLoginReducerInitialState, doSetPassword(mockPassword))).toEqual({...mockLoginReducerInitialState, password:mockPassword});
    });
});

describe('applySendLoginRequest', () => {
    it('should return state unchanged', () => {
        expect(applySendLoginRequest(mockLoginReducerInitialState)).toEqual(mockLoginReducerInitialState);
    });
});

describe('applyLoginRequestSuccess', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestSuccess(mockLoginReducerInitialState, doLoginRequestSuccess(mockToken))).toEqual(mockLoginSuccessState);
    });
});

describe('applyLoginRequestFailure', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestFailure(mockLoginReducerInitialState, doLoginRequestFailure(mockErrorMessage))).toEqual(mockLoginFailureState);
    });
});