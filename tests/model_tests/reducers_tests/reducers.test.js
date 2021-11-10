import { 
    doSetUsername, 
    doSetPassword, 
    doSendLoginRequest, 
    doLoginRequestSuccess, 
    doLoginRequestFailure, 
    doGetPostsRequest, 
    doGetPostsSuccess,
    doGetPostsFailure,
    doGetUserRequest,
    doGetUserSuccess,
    doGetUserFailure,
} from '../../../src/model/actionCreators/actionCreators';
import { mockPassword, mockUsername, mockLoginReducerInitialState, mockToken, mockErrorMessage, mockFeedInitialState, mockPosts, mockUserInfoInitialState, mockUser } from '../../mockValues';
import { feedReducer, loginReducer, userInfoReducer } from '../../../src/model/reducers/reducers';
import { applyLoginRequestFailure, applyLoginRequestSuccess, applySendLoginRequest, applySetPassword, applySetUsername } from '../../../src/model/appliers/loginReducerAppliers';
import { applyGetPostsFailure, applyGetPostsRequest, applyGetPostsSuccess } from '../../../src/model/appliers/feedReducerAppliers';
import { applyGetUserRequest, applyGetUserSuccess, applyGetUserFailure } from '../../../src/model/appliers/userInfoReducerAppliers';

jest.mock('../../../src/model/appliers/loginReducerAppliers');
jest.mock('../../../src/model/appliers/feedReducerAppliers');
jest.mock('../../../src/model/appliers/userInfoReducerAppliers');


const setUsernameAction = doSetUsername(mockUsername);
const setPasswordAction = doSetPassword(mockPassword);
const sendLoginRequestAction = doSendLoginRequest();
const loginRequestSuccessAction = doLoginRequestSuccess(mockToken);
const loginRequestFailureAction = doLoginRequestFailure(mockErrorMessage);

const getPostsRequestAction = doGetPostsRequest();
const getPostsSuccessAction = doGetPostsSuccess(mockPosts);
const getPostsFailureAction = doGetPostsFailure(mockErrorMessage);

const getUserRequestAction = doGetUserRequest();
const getUserSuccessAction = doGetUserSuccess(mockUser);
const getUserFailureAction = doGetUserFailure(mockErrorMessage);

const defaultAction = {type: 'default'}

describe('loginReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(loginReducer(undefined,undefined)).toEqual(mockLoginReducerInitialState);
    });
    it('should call applySetUsername with expected params when given SET_USERNAME action', () => {
        loginReducer(mockLoginReducerInitialState, setUsernameAction);
        expect(applySetUsername).toHaveBeenCalledWith(mockLoginReducerInitialState, setUsernameAction);
    });
    it('should call applySetPassword with expected params when given SET_PASSWORD action', () => {
        loginReducer(mockLoginReducerInitialState, setPasswordAction);
        expect(applySetPassword).toHaveBeenCalledWith(mockLoginReducerInitialState, setPasswordAction);
    });
    it('should call applySendLoginRequest with expected params when given SEND_LOGIN_REQUEST action', () => {
        loginReducer(mockLoginReducerInitialState, sendLoginRequestAction);
        expect(applySendLoginRequest).toHaveBeenCalledWith(mockLoginReducerInitialState);
    });
    it('should call applyLoginRequestSuccess with expected params when given LOGIN_REQUEST_SUCCESS action', () => {
        loginReducer(mockLoginReducerInitialState, loginRequestSuccessAction);
        expect(applyLoginRequestSuccess).toHaveBeenCalledWith(mockLoginReducerInitialState, loginRequestSuccessAction);
    });
    it('should call applyLoginRequestFailure with expected params when given LOGIN_REQUEST_FAILURE action', () => {
        loginReducer(mockLoginReducerInitialState, loginRequestFailureAction);
        expect(applyLoginRequestFailure).toHaveBeenCalledWith(mockLoginReducerInitialState, loginRequestFailureAction);
    });
    it('should return initial state when default case', () => {
        expect(loginReducer(mockLoginReducerInitialState, defaultAction)).toBe(mockLoginReducerInitialState);
    });
});

describe('feedReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(feedReducer(undefined,undefined)).toEqual(mockFeedInitialState);
    });
    it('should call applyGetPostsRequest with expected params when given GET_POSTS_REQUEST action', () => {
        feedReducer(mockFeedInitialState, getPostsRequestAction);
        expect(applyGetPostsRequest).toHaveBeenCalledWith(mockFeedInitialState, getPostsRequestAction);
    });
    it('should call applyGetPostsSuccess with expected params when given GET_POSTS_SUCCESS action', () => {
        feedReducer(mockFeedInitialState, getPostsSuccessAction);
        expect(applyGetPostsSuccess).toHaveBeenCalledWith(mockFeedInitialState, getPostsSuccessAction);
    });
    it('should call applyGetPostsFailure with expected params when given GET_POSTS_FAILURE action', () => {
        feedReducer(mockFeedInitialState, getPostsFailureAction);
        expect(applyGetPostsFailure).toHaveBeenCalledWith(mockFeedInitialState, getPostsFailureAction);
    });
    it('should return initial state when default case', () => {
        expect(feedReducer(mockFeedInitialState, defaultAction)).toBe(mockFeedInitialState);
    });
});

describe('userInfoReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(userInfoReducer(undefined,undefined)).toEqual(mockUserInfoInitialState);
    });
    it('should call applyGetUserRequest with expected params when given GET_USER_REQUEST action', () => {
        userInfoReducer(mockUserInfoInitialState, getUserRequestAction);
        expect(applyGetUserRequest).toHaveBeenCalledWith(mockUserInfoInitialState, getUserRequestAction);
    });
    it('should call applyGetUserSuccess with expected params when given GET_USER_SUCCESS action', () => {
        userInfoReducer(mockUserInfoInitialState, getUserSuccessAction);
        expect(applyGetUserSuccess).toHaveBeenCalledWith(mockUserInfoInitialState, getUserSuccessAction);
    });
    it('should call applyGetUserFailure with expected params when given GET_USER_FAILURE action', () => {
        userInfoReducer(mockUserInfoInitialState, getUserFailureAction);
        expect(applyGetUserFailure).toHaveBeenCalledWith(mockUserInfoInitialState, getUserFailureAction);
    });
    it('should return initial state when default case', () => {
        expect(userInfoReducer(mockUserInfoInitialState, defaultAction)).toBe(mockUserInfoInitialState);
    });
});