export function applySetUsername(state,action){
    return {...state, username: action.username}
}
export function applySetPassword(state,action){
    return {...state, password: action.password}
}