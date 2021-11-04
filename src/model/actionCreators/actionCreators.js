import axios from 'axios';
import { actionTypes } from '../actionTypes/actionTypes';

export function doSetUsername(username){
    return {type: actionTypes.SET_USERNAME, username:username};
}

export function doSetPassword(password){
    return {type: actionTypes.SET_PASSWORD, password:password};
}

export function doLoginRequestSuccess(token){
    return {type: actionTypes.LOGIN_REQUEST_SUCCESS, token: token}
}
export function doLoginRequestFailure(error){
    return {type: actionTypes.LOGIN_REQUEST_SUCCESS, error: error}
}

export function doSendUsernameAndPasswordThunk(username, password){
    return function(dispatch){
        dispatch(actionTypes.SEND_LOGIN_REQUEST);
        axios.post('/login', {
            username:username,
            password:password,
        }).then((res) => {
            const token = res.data;
            dispatch(doLoginRequestSuccess(token));
        }).catch(error => dispatch(doLoginRequestFailure(error)));
    }
}