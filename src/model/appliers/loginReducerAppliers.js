import { loginStateSelector } from '../selectors/selectors';

export function applySetUsername(state,action){
    const loginState = loginStateSelector(state);
    return {...loginState, username: action.username}
}
export function applySetPassword(state,action){
    const loginState = loginStateSelector(state);
    return {...loginState, password: action.password}
}

export function applySendLoginRequest(state){
    return loginStateSelector(state);
}

export function applyLoginRequestSuccess(state,action){
    const loginState = loginStateSelector(state);
    return {...loginState, token: action.token}
}

export function applyLoginRequestFailure(state,action){
    const loginState = loginStateSelector(state);
    return {...loginState, error: action.error}
}