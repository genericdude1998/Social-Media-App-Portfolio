

export function applySetUsername(state,action){
    return {...state, username: action.username}
}
export function applySetPassword(state,action){
    return {...state, password: action.password}
}

export function applySendLoginRequest(state){
    return state;
}

export function applyLoginRequestSuccess(state,action){
    return {...state, token: action.token}
}

export function applyLoginRequestFailure(state,action){
    return {...state, error: action.error}
}