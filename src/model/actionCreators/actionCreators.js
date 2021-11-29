import axios from 'axios';
import { actionTypes } from '../actionTypes/actionTypes';

export function doSetUsername(username){
    return {type: actionTypes.SET_USERNAME, username:username};
}

export function doSetPassword(password){
    return {type: actionTypes.SET_PASSWORD, password:password};
}

export function doSendLoginRequest(){
    return {type: actionTypes.SEND_LOGIN_REQUEST}
}

export function doLoginRequestSuccess(token){
    return {type: actionTypes.LOGIN_REQUEST_SUCCESS, token: token}
}
export function doLoginRequestFailure(error){
    return {type: actionTypes.LOGIN_REQUEST_FAILURE, error: error}
}

export function doSendUsernameAndPasswordThunk(username, password, event){
    return function(dispatch){
        event.preventDefault();
        dispatch(doSendLoginRequest());
        return axios.post('/login', {
            username:username,
            password:password,
        }).then((res) => {
            const token = res.data;
            dispatch(doLoginRequestSuccess(token));
            localStorage.token = token;
        }).catch(error => {
            console.log(error);
            const errorMessage = error.response.data;
            dispatch(doLoginRequestFailure(errorMessage));
        });
    }
}

export function doGetPostsRequest() {
    return {type: actionTypes.GET_POSTS_REQUEST}
}

export function doGetPostsSuccess(posts){
    return {type: actionTypes.GET_POSTS_SUCCESS, posts:posts}
}

export function doGetPostsFailure(error){
    return {type: actionTypes.GET_POSTS_FAILURE, error:error}
}

export function doGetPostsThunk(){
    return function GetPostsThunk(dispatch){
        dispatch(doGetPostsRequest());
        return axios.get('/posts').then((res) => {
            const posts = res.data;
            dispatch(doGetPostsSuccess(posts));
        }).catch(error => {
            const errorMessage = error.response.data;
            dispatch(doGetPostsFailure(errorMessage));
        });
    }
}

export function doGetUserRequest(){
    return {type: actionTypes.GET_USER_REQUEST}
}

export function doGetUserSuccess(user){
    return {type: actionTypes.GET_USER_SUCCESS, user:user}
}

export function doGetUserFailure(error){
    return {type: actionTypes.GET_USER_FAILURE, error:error}
}

export function doGetUserThunk(id){
    return function(dispatch){
        dispatch(doGetUserRequest());
        return axios.get(`/users/${id}`).then((res) => {
            const user = res.data;
            dispatch(doGetUserSuccess(user));
        }).catch(error => {
            const errorMessage = error.response.data;
            dispatch(doGetUserFailure(errorMessage));
        });
    }
}

export function doSetPostContent(content){
    return {type: actionTypes.SET_POST_CONTENT, content:content}
}

export function doSendPostRequest(){
    return {type: actionTypes.SEND_POST_REQUEST}
}

export function doSendPostSuccess(){
    return {type: actionTypes.SEND_POST_SUCCESS}
}

export function doSendPostFailure(error){
    return {type: actionTypes.SEND_POST_FAILURE, error:error}
}

export function doSendPostThunk(content,event, navigate){
    event.preventDefault();
    return function(dispatch){
        dispatch(doSendPostRequest());
        return axios.post('/newPost',{
            content:content,
        }).then(() => {
            //refreshPosts(dispatch, doGetPostsThunk);
            navigate('/feed');
        }).catch(error => {
            const errorMessage = error.response.data;
            dispatch(doSendPostFailure(errorMessage));
        });
    }
}

export function doToggleTheme(){
    return{ type: actionTypes.TOGGLE_THEME};
}

export function doOpenComments(postId){
    return {type: actionTypes.OPEN_COMMENTS, postId:postId};
}

export function doCloseComments(postId){
    return {type: actionTypes.CLOSE_COMMENTS, postId:postId};
}

export function doSendCommentRequest(){
    return {type: actionTypes.SEND_COMMENT_REQUEST}
}

export function doSendCommentFailure(error){
    return {type: actionTypes.SEND_COMMENT_FAILURE, error:error}
}

export function doSetCommentContent(content){
    return {type: actionTypes.SET_COMMENT_CONTENT, content:content}
}

export function doClearCommentContent(){
    return {type: actionTypes.CLEAR_COMMENT_CONTENT}
}
export function doSendCommentThunk(content, event, postId){
    event.preventDefault();
    return function(dispatch){
        dispatch(doSendCommentRequest());
        return axios.post('/newComment',{
            content:content,
            postId: postId,
        }).then(() => {
            dispatch(doClearCommentContent());
            dispatch(doGetPostsThunk());
            event.target[0].value = '';
        }).catch(error => {
            const errorMessage = error.response.data;
            dispatch(doSendCommentFailure(errorMessage));
        });
    }
}

export function doUserLogout(){
    return {type: actionTypes.USER_LOGOUT}
}
