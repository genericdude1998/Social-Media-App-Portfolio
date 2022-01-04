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
    doSendPostFailure,
    doSetPostContent,
    doOpenComments,
    doCloseComments,
    doSetCommentContent,
    doSendCommentFailure,
    doClearCommentContent,
    doToggleTheme,
    doClearPostContent,
    doSetFeedLoading,
    doSetFeedProgressBar,
} from '../../../src/model/actionCreators/actionCreators';
import { mockPassword, mockUsername, mockLoginReducerInitialState, mockToken, mockErrorMessage, mockFeedInitialState, mockPosts, mockUserInfoInitialState, mockUser, mockNPCInitialState, mockContent, mockId, mockNCCInitialState, mockThemeInitialState } from '../../mockValues';
import { feedReducer, loginReducer, NCCReducer, NPCReducer, toggleThemeReducer, userInfoReducer } from '../../../src/model/reducers/reducers';
import { applyLoginRequestFailure, applyLoginRequestSuccess, applySendLoginRequest, applySetPassword, applySetUsername } from '../../../src/model/appliers/loginReducerAppliers';
import { applyClearComment, applyCloseComments, applyGetPostsFailure, applyGetPostsRequest, applyGetPostsSuccess, applyOpenComments, applySendCommentFailure, applySetComment, applySetFeedLoading, applySetFeedProgressBar } from '../../../src/model/appliers/feedReducerAppliers';
import { applyGetUserRequest, applyGetUserSuccess, applyGetUserFailure } from '../../../src/model/appliers/userInfoReducerAppliers';
import { applyClearPost, applySendPostFailure, applySetPostContent } from '../../../src/model/appliers/NPCReducerAppliers';
import { applyToggleTheme } from '../../../src/model/appliers/toggleThemeReducerAppliers';

jest.mock('../../../src/model/appliers/loginReducerAppliers');
jest.mock('../../../src/model/appliers/feedReducerAppliers');
jest.mock('../../../src/model/appliers/userInfoReducerAppliers');
jest.mock('../../../src/model/appliers/NPCReducerAppliers');
jest.mock('../../../src/model/appliers/toggleThemeReducerAppliers');



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

const setPostContentAction = doSetPostContent(mockContent);
const sendPostFailureAction = doSendPostFailure(mockErrorMessage);

const openCommentsAction = doOpenComments(mockId);
const closeCommentsAction = doCloseComments(mockId);

const setFeedLoadingAction = doSetFeedLoading(true);
const setFeedProgressBarAction = doSetFeedProgressBar(50);

const clearPostContentAction = doClearPostContent()


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
    it('should call applyOpenComments with expected params when given OPEN_COMMENTS action', () => {
        feedReducer(mockFeedInitialState, openCommentsAction);
        expect(applyOpenComments).toHaveBeenCalledWith(mockFeedInitialState, openCommentsAction);
    });
    it('should call applyCloseComments with expected params when given CLOSE_COMMENTS action', () => {
        feedReducer(mockFeedInitialState, closeCommentsAction);
        expect(applyCloseComments).toHaveBeenCalledWith(mockFeedInitialState, closeCommentsAction);
    });

    it('should call applySetFeedLoading with expected params when given SET_FEED_LOADING action', () => {
        feedReducer(mockFeedInitialState, setFeedLoadingAction);
        expect(applySetFeedLoading).toHaveBeenCalledWith(mockFeedInitialState, setFeedLoadingAction);
    });
    it('should call applySetFeedProgressBar with expected params when given SET_FEED_PROGRESSBAR action', () => {
        feedReducer(mockFeedInitialState, setFeedProgressBarAction);
        expect(applySetFeedProgressBar).toHaveBeenCalledWith(mockFeedInitialState, setFeedProgressBarAction);
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

describe('sendPostReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(NPCReducer(undefined,undefined)).toEqual(mockNPCInitialState);
    });
    it('should call applySetPostContent with expected params when given SET_POST_CONTENT action', () => {
        NPCReducer(mockNPCInitialState, setPostContentAction);
        expect(applySetPostContent).toHaveBeenCalledWith(mockNPCInitialState, setPostContentAction);
    });
    it('should call applySendPostFailure with expected params when given SEND_POST_FAILURE action', () => {
        NPCReducer(mockNPCInitialState, sendPostFailureAction);
        expect(applySendPostFailure).toHaveBeenCalledWith(mockNPCInitialState, sendPostFailureAction);
    });
    it('should call applyClearPost with expected params when given CLEAR_POST_CONTENT action', () => {
        NPCReducer(mockNPCInitialState, clearPostContentAction);
        expect(applyClearPost).toHaveBeenCalledWith(mockNPCInitialState, clearPostContentAction);
    });
    it('should return initial state when default case', () => {
        expect(NPCReducer(mockNPCInitialState, defaultAction)).toBe(mockNPCInitialState);
    });
});

describe('NCCReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(NCCReducer(undefined,undefined)).toEqual(mockNCCInitialState);
    });
    it('should applySetComment when given SET_COMMENT_CONTENT action', () => {
        NCCReducer(mockNCCInitialState, doSetCommentContent())
        expect(applySetComment).toHaveBeenCalledWith(mockNCCInitialState, doSetCommentContent())
    });
    it('should applySetCommentFailure when given SEnd_COMMENT_FAILURE action', () => {
        NCCReducer(mockNCCInitialState, doSendCommentFailure(mockErrorMessage))
        expect(applySendCommentFailure).toHaveBeenCalledWith(mockNCCInitialState, doSendCommentFailure(mockErrorMessage))
    });
    it('should applyClearCommentContent when given CLEAR_COMMENT_CONTENT action', () => {
        NCCReducer(mockNCCInitialState, doClearCommentContent())
        expect(applyClearComment).toHaveBeenCalledWith(mockNCCInitialState, doClearCommentContent())
    });
    it('should return initial state when default case', () => {
        expect(NCCReducer(mockNCCInitialState, defaultAction)).toBe(mockNCCInitialState);
    });
});

describe('toggleThemeReducer', () => {
    it('should have expected initialState and default action', () => {
        expect(toggleThemeReducer(undefined,undefined)).toEqual(mockThemeInitialState);
    });
    it('should applyToggleTheme when given TOGGLE_THEME action', () => {
        toggleThemeReducer(mockThemeInitialState, doToggleTheme());
        expect(applyToggleTheme).toHaveBeenCalledWith(mockThemeInitialState, doToggleTheme());
    });
    it('should return initial state when default case', () => {
        expect(toggleThemeReducer(mockThemeInitialState, defaultAction)).toBe(mockThemeInitialState);
    });
});