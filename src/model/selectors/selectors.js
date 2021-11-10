export function loginStateSelector(state) {
    return state.login;
}
export function feedStateSelector(state) {
    return state.feed;
}
export function userInfoStateSelector(state) {
    return state.userInfo;
}
export function NPCStateSelector(state) {
    return {newPostError: state.feed.newPostError};
}