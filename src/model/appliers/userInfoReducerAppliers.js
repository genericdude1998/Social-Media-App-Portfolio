export function applyGetUserRequest(state){
    return state;
}

export function applyGetUserSuccess(state,action){
    return {...state, user: action.user};
}

export function applyGetUserFailure(state,action){
    return {...state, error: action.error};
}