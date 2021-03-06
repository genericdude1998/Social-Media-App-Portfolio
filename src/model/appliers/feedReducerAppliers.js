export function applySetFeedLoading(state,action){
    return {...state, loading: action.loading};
}

export function applySetFeedProgressBar(state,action){
    return {...state, percentage: action.percentage};
}


export function applyGetPostsRequest(state){
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

export function applySetComment(state,action){
    return {...state, content: action.content}
}

export function applySendCommentFailure(state,action){
    return {...state, newCommentError: action.error}
}

export function applyClearComment(state){
    return{...state, content: ''}
}
