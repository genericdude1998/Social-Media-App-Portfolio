export function applySetPostContent(state,action){
    return [...state, action.content];
}