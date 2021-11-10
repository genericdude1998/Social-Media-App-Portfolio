import { doGetPostsThunk, doGetUserThunk, doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../model/actionCreators/actionCreators';
import { loginStateSelector, feedStateSelector, userInfoStateSelector } from '../../model/selectors/selectors';

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