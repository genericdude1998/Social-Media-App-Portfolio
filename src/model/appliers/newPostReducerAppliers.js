export function applySetPostContent(state,action){
    return [...state, action.content];
}

export function applySendPostFailure(state,action){
    return {...state, newPostError: action.error}
}