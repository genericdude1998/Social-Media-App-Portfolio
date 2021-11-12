export function applyGetPostsRequest(state,action){
    return state;
}

export function applyGetPostsSuccess(state,action){
    return {...state, posts: action.posts}
}

export function applyGetPostsFailure(state,action){
    return {...state, error: action.error}
}

export function applyOpenComments(state,action){
    const newPosts =  [...state.posts];
    newPosts[action.postId] = {...newPosts[action.postId], openComments:true}
    return {...state, posts: newPosts}
}

export function applyCloseComments(state,action){
    const newPosts =  [...state.posts];
    newPosts[action.postId] = {...newPosts[action.postId], openComments:false}
    return {...state, posts: newPosts}
}