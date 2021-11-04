import { actionTypes } from '../actionTypes/actionTypes';
import { applySetPassword, applySetUsername } from '../appliers/loginReducerAppliers';

const loginReducerInitialState = {username: '', password:'', token: null};

export function loginReducer(state = loginReducerInitialState, action = 'default'){
    switch (action.type) {
    case actionTypes.SET_USERNAME: return applySetUsername(state,action);
    case actionTypes.SET_PASSWORD: return applySetPassword(state,action);
    default: return state;
    }
}