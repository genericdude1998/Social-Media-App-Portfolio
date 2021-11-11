export function applySetPostContent(state,action){
    return {...state, content: action.content};
}

export function applySendPostFailure(state,action){
    return {...state, newPostError: action.error}
}