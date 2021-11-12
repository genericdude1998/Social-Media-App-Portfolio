import { doCloseComments, doGetPostsThunk, doGetUserThunk, doOpenComments, doSendCommentThunk, doSendPostThunk, doSendUsernameAndPasswordThunk, doSetCommentContent, doSetPassword, doSetPostContent, doSetUsername, doToggleTheme } from '../../model/actionCreators/actionCreators';
import { loginStateSelector, feedStateSelector, userInfoStateSelector, NPCStateSelector, themeStateSelector, NCCStateSelector } from '../../model/selectors/selectors';

export function mapLoginDispatchToProps(dispatch){
    return {
        onChangeUsername: (e) => dispatch(doSetUsername(e.target.value)),
        onChangePassword: (e) => dispatch(doSetPassword(e.target.value)),
        onSubmitLogin: (username, password) => (event) => dispatch(doSendUsernameAndPasswordThunk(username,password, event)),
    };
}
export function mapLoginStateToProps(state){
    return loginStateSelector(state);
}

export function mapFeedDispatchToProps(dispatch){
    return {
        onFetchPosts: () => dispatch(doGetPostsThunk()),
    };
}
export function mapFeedStateToProps(state){
    return feedStateSelector(state);
}

export function mapUserDispatchToProps(dispatch){
    return {
        onFetchUser: (id) => dispatch(doGetUserThunk(id)),
    };
}
export function mapUserStateToProps(state){
    return userInfoStateSelector(state);
}

export function mapNPCDispatchToProps(dispatch){
    return {
        onSetPostContent: (e) => dispatch(doSetPostContent(e.target.value)),
        onSendNewPost: (content, navigate) => (event) => dispatch(doSendPostThunk(content, event, navigate)),
    };
}
export function mapNPCStateToProps(state){
    return NPCStateSelector(state);
}

export function mapThemeDispatchToProps(dispatch){
    return {
        onToggleTheme: () => dispatch(doToggleTheme()),
    };
}
export function mapThemeStateToProps(state){
    return themeStateSelector(state);
}

export function mapCommentsDispatchToProps(dispatch){
    return {
        onOpenComments: (postId) => dispatch(doOpenComments(postId)),
        onCloseComments: (postId) => dispatch(doCloseComments(postId)),
    };
}

export function mapNCCDispatchToProps(dispatch){
    return {
        onSetCommentContent: (e) => dispatch(doSetCommentContent(e.target.value)),
        onSendNewComment: (content, navigate, postId) => (event) => dispatch(doSendCommentThunk(content, event, navigate, postId)),
    };
}
export function mapNCCStateToProps(state){
    return NCCStateSelector(state);
}