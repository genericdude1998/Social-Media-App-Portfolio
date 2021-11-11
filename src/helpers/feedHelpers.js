export function refreshPosts(dispatch, doGetPostsThunk){
    dispatch(doGetPostsThunk());
}