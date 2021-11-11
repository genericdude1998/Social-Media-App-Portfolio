import { actionTypes } from '../actionTypes/actionTypes';
import { applyGetPostsFailure, applyGetPostsRequest, applyGetPostsSuccess, applySendPostFailure } from '../appliers/feedReducerAppliers';
import { applyLoginRequestFailure, applyLoginRequestSuccess, applySendLoginRequest, applySetPassword, applySetUsername } from '../appliers/loginReducerAppliers';
import { applySetPostContent } from '../appliers/newPostReducerAppliers';
import { applyGetUserFailure, applyGetUserRequest, applyGetUserSuccess } from '../appliers/userInfoReducerAppliers';

const loginReducerInitialState = {username: '', password:'', token: null, error:null};
const feedReducerInitialState = {posts: []};
const userInfoReducerInitialState = {};
const sendPostInitialState = {newPostError: null, content: null}



export function loginReducer(state = loginReducerInitialState, action = 'default'){
    switch (action.type) {
    case actionTypes.SET_USERNAME: return applySetUsername(state,action);
    case actionTypes.SET_PASSWORD: return applySetPassword(state,action);
    case actionTypes.SEND_LOGIN_REQUEST: return applySendLoginRequest(state);
    case actionTypes.LOGIN_REQUEST_SUCCESS: return applyLoginRequestSuccess(state,action);
    case actionTypes.LOGIN_REQUEST_FAILURE: return applyLoginRequestFailure(state,action);
    default: return state;
    }
}

export function feedReducer(state = feedReducerInitialState,action={type: 'default'}) {
    switch (action.type) {
    case actionTypes.GET_POSTS_REQUEST: return applyGetPostsRequest(state,action);
    case actionTypes.GET_POSTS_SUCCESS: return applyGetPostsSuccess(state,action);
    case actionTypes.GET_POSTS_FAILURE: return applyGetPostsFailure(state,action);  
    case actionTypes.SEND_POST_FAILURE: return applySendPostFailure(state,action);  
    default: return state;
    }
}

export function userInfoReducer(state = userInfoReducerInitialState,action = {type: 'default'}) {
    switch (action.type) {
    case actionTypes.GET_USER_REQUEST: return applyGetUserRequest(state,action);
    case actionTypes.GET_USER_SUCCESS: return applyGetUserSuccess(state,action);
    case actionTypes.GET_USER_FAILURE: return applyGetUserFailure(state,action);    
    default: return state;
    }
}

export function sendPostReducer(state = sendPostInitialState ,action = {type:'default'}){
    switch (action.type) {
    case actionTypes.SET_POST_CONTENT: return applySetPostContent(state,action);
    default: return state;
    }
}