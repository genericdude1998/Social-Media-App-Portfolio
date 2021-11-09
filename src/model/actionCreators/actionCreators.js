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
        }).catch(error => {
            const errorMessage = error.response.data;
            dispatch(doLoginRequestFailure(errorMessage));
        });
    }
}

export function doGetPosts() {
    return {type: actionTypes.GET_POSTS_REQUEST}
}