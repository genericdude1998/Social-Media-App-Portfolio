import { 
    doSetUsername, 
    doSetPassword, 
    doSendLoginRequest, 
    doSendUsernameAndPasswordThunk, 
    doLoginRequestSuccess, 
    doLoginRequestFailure, 
    doGetPostsRequest,
    doGetPostsSuccess,
    doGetPostsFailure,
    doGetPostsThunk,
    doGetUserRequest,
    doGetUserSuccess,
    doGetUserFailure,
    doGetUserThunk,
    doSendPostRequest,
    doSendPostSuccess,
    doSendPostFailure,
    doSendPostThunk,
    doToggleTheme,
    doOpenComments,
    doCloseComments,
    doSendCommentRequest,
    doSendCommentFailure,
    doSetCommentContent,
    doClearCommentContent,
    doSendCommentThunk,
} from '../../../src/model/actionCreators/actionCreators';
import { actionTypes } from '../../../src/model/actionTypes/actionTypes';
import {mockUsername, mockPassword, correctUsername, correctPassword, mockToken, mockErrorMessage, mockEvent, mockPosts, mockUser, mockId, mockPost, mockContent} from '../../mockValues';
import axios from 'axios';

const expectedSendLoginRequest = {type: actionTypes.SEND_LOGIN_REQUEST}
const expectedSetUsernameAction = {type: actionTypes.SET_USERNAME, username: mockUsername};
const expectedSetPasswordAction = {type: actionTypes.SET_PASSWORD, password: mockPassword};

const expectedGetPostsRequest = {type: actionTypes.GET_POSTS_REQUEST};
const expectedGetPostsSuccess = {type: actionTypes.GET_POSTS_SUCCESS, posts: mockPosts};
const expectedGetPostsFailure = {type: actionTypes.GET_POSTS_FAILURE, error: mockErrorMessage};

const expectedGetUserRequest = {type: actionTypes.GET_USER_REQUEST};
const expectedGetUserSuccess = {type: actionTypes.GET_USER_SUCCESS, user: mockUser};
const expectedGetUserFailure = {type: actionTypes.GET_USER_FAILURE, error: mockErrorMessage};

const expectedSendPostRequest = {type: actionTypes.SEND_POST_REQUEST};
const expectedSendPostSuccess = {type: actionTypes.SEND_POST_SUCCESS};
const expectedSendPostFailure = {type: actionTypes.SEND_POST_FAILURE, error: mockErrorMessage};

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('axios');
jest.mock('../../../src/helpers/feedHelpers');

afterEach(() => {
    jest.clearAllMocks();
})

describe('doSetUsername', () => {
    it('should return an action object with expected type and username payload', () => {
        expect(doSetUsername(mockUsername)).toEqual(expectedSetUsernameAction);
    });
});

describe('doSetPassword', () => {
    it('should return an action object with expected type and password payload', () => {
        expect(doSetPassword(mockPassword)).toEqual(expectedSetPasswordAction);
    });
});

describe('doSendLoginRequest', () => {
    it('should return an action with expected type', () => {
        expect(doSendLoginRequest()).toEqual(expectedSendLoginRequest);
    });
});

describe('doSendUsernameAndPasswordThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doSendUsernameAndPasswordThunk(mockUsername, mockPassword);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call dispatch with SEND_LOGIN_REQUEST and LOGIN_REQUEST_SUCCESS when given correct credentials', () => {
        axios.post.mockImplementation(() => Promise.resolve({data: mockToken}));

        const thunk = doSendUsernameAndPasswordThunk(correctUsername,correctPassword, mockEvent);
        return thunk(mockDispatch).then(() => {
            expect(axios.post).toHaveBeenCalledWith('/login', {
                username: correctUsername,
                password: correctPassword,
            });
            expect(mockDispatch).toHaveBeenCalledWith(doSendLoginRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doLoginRequestSuccess(mockToken))});
    });
    it('should call dispatch with SEND_LOGIN_REQUEST and LOGIN_REQUEST_FAILURE when given correct credentials', () => {
        axios.post.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doSendUsernameAndPasswordThunk(correctUsername,correctPassword, mockEvent);
        return thunk(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(doSendLoginRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doLoginRequestFailure(mockErrorMessage))});
    });
});

describe('doGetPostsRequest', () => {
    it('should return an action with expected type', () => {
        expect(doGetPostsRequest()).toEqual(expectedGetPostsRequest);
    });
});
describe('doGetPostsSuccess', () => {
    it('should return expected action', () => {
        expect(doGetPostsSuccess(mockPosts)).toEqual(expectedGetPostsSuccess);
    });
});
describe('doGetPostsFailure', () => {
    it('should return expected action', () => {
        expect(doGetPostsFailure(mockErrorMessage)).toEqual(expectedGetPostsFailure);
    });
});

describe('doGetPostsThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doSendUsernameAndPasswordThunk(mockUsername, mockPassword);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call dispatch with GET_POST_REQUEST and GET_POST_SUCCESS when succeeding', () => {
        axios.get.mockImplementation(() => Promise.resolve({data: mockPosts}));

        const thunk = doGetPostsThunk();
        return thunk(mockDispatch).then(() => {
            expect(axios.get).toHaveBeenCalledWith('/posts');
            expect(mockDispatch).toHaveBeenCalledWith(doGetPostsRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doGetPostsSuccess(mockPosts))});
    });
    it('should call dispatch with SEND_LOGIN_REQUEST and GET_POSTS_FAILURE when failing', () => {
        axios.get.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doGetPostsThunk();
        return thunk(mockDispatch).then(() => {
            expect(axios.get).toHaveBeenCalledWith('/posts');
            expect(mockDispatch).toHaveBeenCalledWith(doGetPostsRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doGetPostsFailure(mockErrorMessage))});
    });
});

describe('doGetUserRequest', () => {
    it('should return an action with expected type', () => {
        expect(doGetUserRequest()).toEqual(expectedGetUserRequest);
    });
});
describe('doGetUserSuccess', () => {
    it('should return expected action', () => {
        expect(doGetUserSuccess(mockUser)).toEqual(expectedGetUserSuccess);
    });
});
describe('doGetUserFailure', () => {
    it('should return expected action', () => {
        expect(doGetUserFailure(mockErrorMessage)).toEqual(expectedGetUserFailure);
    });
});
describe('doGetUserThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doGetUserThunk(mockId);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call dispatch with GET_USER_REQUEST and GET_USER_SUCCESS when succeeding', () => {
        axios.get.mockImplementation(() => Promise.resolve({data: mockUser}));

        const thunk = doGetUserThunk(mockId);
        return thunk(mockDispatch).then(() => {
            expect(axios.get).toHaveBeenCalledWith(`/users/${mockId}`);
            expect(mockDispatch).toHaveBeenCalledWith(doGetUserRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doGetUserSuccess(mockUser))});
    });
    it('should call dispatch with SEND_LOGIN_REQUEST and GET_POSTS_FAILURE when failing', () => {
        axios.get.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doGetUserThunk(mockId);
        return thunk(mockDispatch).then(() => {
            expect(axios.get).toHaveBeenCalledWith(`/users/${mockId}`);
            expect(mockDispatch).toHaveBeenCalledWith(doGetUserRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doGetUserFailure(mockErrorMessage))});
    });
});
describe('doSendPostRequest', () => {
    it('should return an action with expected type', () => {
        expect(doSendPostRequest()).toEqual(expectedSendPostRequest);
    });
});
describe('doSendPostSuccess', () => {
    it('should return expected action', () => {
        expect(doSendPostSuccess()).toEqual(expectedSendPostSuccess);
    });
});
describe('doSendPostFailure', () => {
    it('should return expected action', () => {
        expect(doSendPostFailure(mockErrorMessage)).toEqual(expectedSendPostFailure);
    });
});

describe('doSendPostThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doSendPostThunk(mockContent, mockEvent, mockNavigate);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call dispatch with SEND_POST_REQUEST and doGetPostsThunk() when succeeding', () => {
        axios.post.mockImplementation(() => Promise.resolve({data: mockPost}));
        axios.get.mockImplementation(() => Promise.resolve({data: mockPosts}));

        const thunk = doSendPostThunk(mockContent, mockEvent, mockNavigate);
        return thunk(mockDispatch).then(() => {
            expect(axios.post).toHaveBeenCalledWith('/newPost',{
                content: mockContent,
            });
            expect(mockDispatch).toHaveBeenCalledWith(doSendPostRequest());
            //expect(refreshPosts).toHaveBeenCalledWith(mockDispatch, doGetPostsThunk); not needed
            
        });
    });
    it('should call dispatch with SEND_POST_REQUEST and SEND_POSTS_FAILURE when failing', () => {
        axios.post.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doSendPostThunk(mockContent, mockEvent);
        return thunk(mockDispatch).then(() => {
            expect(axios.post).toHaveBeenCalledWith('/newPost',{
                content: mockContent,
            });
            expect(mockDispatch).toHaveBeenCalledWith(doSendPostRequest());
            expect(mockDispatch).toHaveBeenLastCalledWith(doSendPostFailure(mockErrorMessage))});
    });
});

describe('doToggleTheme', () => {
    it('should return expected action', () => {
        const expectedAction = { type: actionTypes.TOGGLE_THEME};
        expect(doToggleTheme()).toEqual(expectedAction);
    });
});

describe('doOpenComments', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.OPEN_COMMENTS, postId:mockId};
        expect(doOpenComments(mockId)).toEqual(expectedAction);
    });
});

describe('doCloseComments', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.CLOSE_COMMENTS, postId:mockId};
        expect(doCloseComments(mockId)).toEqual(expectedAction);
    });
});

describe('doSendCommentRequest', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.SEND_COMMENT_REQUEST};
        expect(doSendCommentRequest()).toEqual(expectedAction);
    });
});

describe('doSendCommentFailure', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.SEND_COMMENT_FAILURE, error:mockErrorMessage}
        expect(doSendCommentFailure(mockErrorMessage)).toEqual(expectedAction);
    });
});

describe('doSetCommentContent', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.SET_COMMENT_CONTENT, content:mockContent}
        expect(doSetCommentContent(mockContent)).toEqual(expectedAction);
    });
});

describe('doClearCommentContent', () => {
    it('should return expected action', () => {
        const expectedAction = {type: actionTypes.CLEAR_COMMENT_CONTENT}
        expect(doClearCommentContent()).toEqual(expectedAction);
    });
});

describe('doSendCommentThunk', () => {
    it('should return a thunk function', () => {
        const thunk = doSendCommentThunk(mockContent, mockEvent, mockNavigate, mockId);
        expect(typeof(thunk)).toBe('function');
    });
    it('should call event.preventDefault', () => {
        doSendCommentThunk(mockContent, mockEvent, mockNavigate, mockId);
        expect(mockEvent.preventDefault).toHaveBeenCalled();
    });
    it('should call dispatch with SEND_COMMENT_REQUEST and doClearComment and navigate(0) when succeeding', () => {
        axios.post.mockImplementation(() => Promise.resolve({data: {mockContent, mockId}}));

        const thunk = doSendCommentThunk(mockContent, mockEvent, mockNavigate, mockId);
        return thunk(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(doSendCommentRequest());
            expect(axios.post).toHaveBeenCalledWith('/newComment',{
                content: mockContent,
                postId: mockId,
            });
            expect(mockDispatch).toHaveBeenCalledWith(doClearCommentContent())
            expect(mockNavigate).toHaveBeenCalledWith(0);
        });
    });
    it('should call dispatch with SEND_POST_REQUEST and SEND_POSTS_FAILURE when failing', () => {
        axios.post.mockImplementation(() => Promise.reject({response:{data: mockErrorMessage}}));

        const thunk = doSendCommentThunk(mockContent, mockEvent, mockNavigate, mockId);
        return thunk(mockDispatch).then(() => {
            expect(mockDispatch).toHaveBeenCalledWith(doSendCommentRequest());
            expect(axios.post).toHaveBeenCalledWith('/newComment',{
                content: mockContent,
                postId: mockId,
            });
            expect(mockDispatch).toHaveBeenLastCalledWith(doSendCommentFailure(mockErrorMessage))});
    });
});
