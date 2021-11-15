import { applySetUsername, applySetPassword, applySendLoginRequest, applyLoginRequestSuccess, applyLoginRequestFailure } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword, doLoginRequestSuccess, doLoginRequestFailure, doGetPostsSuccess, doGetPostsFailure, doGetUserSuccess, doGetUserFailure, doSendPostFailure, doSetPostContent, doOpenComments, doSetCommentContent, doSendCommentFailure, doClearCommentContent } from '../../../src/model/actionCreators/actionCreators';
import {mockUsername, mockPassword, mockToken, mockErrorMessage, mockLoginReducerInitialState, mockFeedInitialState, mockPosts, mockUserInfoInitialState, mockUser, mockNewPostInitialState, mockContent} from '../../mockValues';
import { applyClearComment, applyCloseComments, applyGetPostsFailure, applyGetPostsRequest, applyGetPostsSuccess, applyOpenComments, applySendCommentFailure, applySetComment } from '../../../src/model/appliers/feedReducerAppliers';
import { applyGetUserFailure, applyGetUserRequest, applyGetUserSuccess } from '../../../src/model/appliers/userInfoReducerAppliers';
import { applySendPostFailure, applySetPostContent } from '../../../src/model/appliers/NPCReducerAppliers';
import { actionTypes } from '../../../src/model/actionTypes/actionTypes';
import { applyToggleTheme } from '../../../src/model/appliers/toggleThemeReducerAppliers';

const mockLoginSuccessState = {...mockLoginReducerInitialState, token: mockToken};
const mockLoginFailureState = {...mockLoginReducerInitialState, error: mockErrorMessage};

const mockGetPostsSuccessState = {...mockFeedInitialState, posts: mockPosts};
const mockGetPostsFailureState = {...mockFeedInitialState, error: mockErrorMessage};

const mockGetUserSuccessState = {...mockUserInfoInitialState, user: mockUser};
const mockGetUserFailureState = {...mockUserInfoInitialState, error: mockErrorMessage};

const mockSetPostContentState = {...mockNewPostInitialState, content: mockContent}
const mockSendPostsFailureState = {...mockNewPostInitialState, newPostError: mockErrorMessage};

const mockInitialNewCommentState = {newCommentError: null, content: null}
const mockSetCommentContentState = {...mockInitialNewCommentState, content: mockContent}
const mockSendNewCommentFailureState = {...mockInitialNewCommentState, newCommentError: mockErrorMessage}
const mockSendNewCommentClearedState = {...mockInitialNewCommentState, content: ''}




const lightState = {theme: 'light'};
const darkState = {theme: 'dark'};



describe('applySetUsername', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetUsername(mockLoginReducerInitialState, doSetUsername(mockUsername))).toEqual({...mockLoginReducerInitialState, username:mockUsername});
    });
});

describe('applySetPassword', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetPassword(mockLoginReducerInitialState, doSetPassword(mockPassword))).toEqual({...mockLoginReducerInitialState, password:mockPassword});
    });
});

describe('applySendLoginRequest', () => {
    it('should return state unchanged', () => {
        expect(applySendLoginRequest(mockLoginReducerInitialState)).toEqual(mockLoginReducerInitialState);
    });
});

describe('applyLoginRequestSuccess', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestSuccess(mockLoginReducerInitialState, doLoginRequestSuccess(mockToken))).toEqual(mockLoginSuccessState);
    });
});

describe('applyLoginRequestFailure', () => {
    it('should return expected state', () => {
        expect(applyLoginRequestFailure(mockLoginReducerInitialState, doLoginRequestFailure(mockErrorMessage))).toEqual(mockLoginFailureState);
    });
});

describe('applyGetPostsRequest', () => {
    it('should return state unchanged', () => {
        expect(applyGetPostsRequest(mockFeedInitialState)).toEqual(mockFeedInitialState);
    });
});

describe('applyGetPostsSuccess', () => {
    it('should return expected state', () => {
        expect(applyGetPostsSuccess(mockFeedInitialState, doGetPostsSuccess(mockPosts))).toEqual(mockGetPostsSuccessState);
    });
});

describe('applyGetPostsFailure', () => {
    it('should return expected state', () => {
        expect(applyGetPostsFailure(mockFeedInitialState, doGetPostsFailure(mockErrorMessage))).toEqual(mockGetPostsFailureState);
    });
});

describe('applyGetUserRequest', () => {
    it('should return state unchanged', () => {
        expect(applyGetUserRequest(mockUserInfoInitialState)).toEqual(mockUserInfoInitialState);
    });
});

describe('applyGetUserSuccess', () => {
    it('should return expected state', () => {
        expect(applyGetUserSuccess(mockUserInfoInitialState, doGetUserSuccess(mockUser))).toEqual(mockGetUserSuccessState);
    });
});

describe('applyGetUserFailure', () => {
    it('should return expected state', () => {
        expect(applyGetUserFailure(mockUserInfoInitialState, doGetUserFailure(mockErrorMessage))).toEqual(mockGetUserFailureState);
    });
});

describe('applySetPostContent', () => {
    it('should return expected state', () => {
        expect(applySetPostContent(mockNewPostInitialState, doSetPostContent(mockContent))).toEqual(mockSetPostContentState);
    });
});

describe('applySendPostFailure', () => {
    it('should return expected state', () => {
        expect(applySendPostFailure(mockNewPostInitialState, doSendPostFailure(mockErrorMessage))).toEqual(mockSendPostsFailureState);
    });
});
describe('applyOpenComments', () => {
    const mockPostsState = {posts: [{id:0, name:''}, {id:1, name:''}]};
    const mockOpenCommentsAction = {type: actionTypes.OPEN_COMMENTS, postId:0}
    const expectedResult = {posts: [{id:0, name:'', openComments: true}, {id:1, name:''}]}
    it('should return as expected', () => {
        expect(applyOpenComments(mockPostsState, mockOpenCommentsAction)).toEqual(expectedResult);
    });
});
describe('applyCloseComments', () => {
    const mockPostsState = {posts: [{id:0, name:''}, {id:1, name:''}]};
    const mockOpenCommentsAction = {type: actionTypes.OPEN_COMMENTS, postId:0}
    const expectedResult = {posts: [{id:0, name:'', openComments: false}, {id:1, name:''}]}
    it('should return as expected', () => {
        expect(applyCloseComments(mockPostsState, mockOpenCommentsAction)).toEqual(expectedResult);
    });
});
describe('applyToggleTheme', () => {
    it('should toggle state from light to dark', () => {
        expect(applyToggleTheme(lightState)).toEqual(darkState); 
    });
    it('should toggle state from dark to light', () => {
        expect(applyToggleTheme(darkState)).toEqual(lightState); 
    });
});

describe('applySetComment', () => {
    it('should return expected state', () => {
        expect(applySetComment(mockInitialNewCommentState, doSetCommentContent(mockContent))).toEqual(mockSetCommentContentState);
    });
});

describe('applySendCommentFailure', () => {
    it('should return expected state', () => {
        expect(applySendCommentFailure(mockInitialNewCommentState, doSendCommentFailure(mockErrorMessage))).toEqual(mockSendNewCommentFailureState);
    });
});

describe('applyClearComment', () => {
    it('should return expected state', () => {
        expect(applyClearComment(mockInitialNewCommentState, doClearCommentContent())).toEqual(mockSendNewCommentClearedState);
    });
});