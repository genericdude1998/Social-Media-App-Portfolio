import { actionTypes } from '../actionTypes/actionTypes';
import { applySetPassword, applySetUsername } from '../appliers/loginReducerAppliers';

export function loginReducer(state, action){
    switch (action.type) {
    case actionTypes.SET_USERNAME: return applySetUsername(state,action);
    case actionTypes.SET_PASSWORD: return applySetPassword(state,action);
    default: return state;
    }
}