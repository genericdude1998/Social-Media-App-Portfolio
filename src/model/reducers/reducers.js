import { actionTypes } from '../actionTypes/actionTypes';
import { applyLoginRequestFailure, applyLoginRequestSuccess, applySendLoginRequest, applySetPassword, applySetUsername } from '../appliers/loginReducerAppliers';

const loginReducerInitialState = {username: '', password:'', token: null, error:null};

export function loginReducer(state = loginReducerInitialState, action = 'default'){
    switch (action.type) {
    case actionTypes.SET_USERNAME: return applySetUsername(state,action);
    case actionTypes.SET_PASSWORD: return applySetPassword(state,action);
    case actionTypes.SEND_LOGIN_REQUEST: return applySendLoginRequest(state);
    case actionTypes.LOGIN_REQUEST_SUCCESS: return applyLoginRequestSuccess(state,action);
    case actionTypes.LOGIN_REQUEST_FAILURE: return applyLoginRequestFailure(state,action);
    default: return state;
    }
}

export function feedReducer(state = [],action) {
    switch (action.type) {    
    default: return state;
    }
}