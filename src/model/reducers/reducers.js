import { actionTypes } from '../actionTypes/actionTypes';
import { applySendLoginRequest, applySetPassword, applySetUsername } from '../appliers/loginReducerAppliers';

const loginReducerInitialState = {username: '', password:'', token: null, error:null};

export function loginReducer(state = loginReducerInitialState, action = 'default'){
    switch (action.type) {
    case actionTypes.SET_USERNAME: return applySetUsername(state,action);
    case actionTypes.SET_PASSWORD: return applySetPassword(state,action);
    case actionTypes.SEND_LOGIN_REQUEST: return applySendLoginRequest(state);
    default: return state;
    }
}