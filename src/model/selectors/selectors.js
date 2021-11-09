export function loginStateSelector(state) {
    return state.login;
}
export function feedStateSelector(state) {
    return state.feed;
}
export function appStateSelector(state){
    return {token: state.login.token}
}