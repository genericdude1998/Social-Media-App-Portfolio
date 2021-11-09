import { doGetPostsThunk, doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../model/actionCreators/actionCreators';
import { loginStateSelector, feedStateSelector, appStateSelector } from '../../model/selectors/selectors';

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
        onFetchPosts: (token) => dispatch(doGetPostsThunk(token)),
    };
}
export function mapFeedStateToProps(state){
    return feedStateSelector(state);
}

export function mapAppStateToProps(state){
    return appStateSelector(state);
}