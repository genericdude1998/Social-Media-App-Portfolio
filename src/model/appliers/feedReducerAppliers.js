export function applyGetPostsRequest(state,action){
    return state;
}

export function applyGetPostsSuccess(state,action){
    return {...state, posts: action.posts}
}

export function applyGetPostsFailure(state,action){
    return {...state, error: action.error}
}

export function applySendPostFailure(state,action){
    return {...state, newPostError: action.error}
}