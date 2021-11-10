export function applyUserRequest(state){
    return state;
}

export function applyUserRequestSuccess(state,action){
    return {...state, token: action.token}
}

export function applyUserRequestFailure(state,action){
    return {...state, error: action.error}