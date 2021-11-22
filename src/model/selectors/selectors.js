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
    return state.npc;
}

export function NCCStateSelector(state) {
    return state.ncc;
}
export function themeStateSelector(state) {
    return state.theme;
}

export function TokenStateSelector(state){
    return {token: state.login.token};
}