import { applySetUsername, applySetPassword, applySendLoginRequest, applyLoginRequestSuccess, applyLoginRequestFailure } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword, doLoginRequestSuccess, doLoginRequestFailure, doGetPostsSuccess, doGetPostsFailure } from '../../../src/model/actionCreators/actionCreators';
import {mockUsername, mockPassword, mockToken, mockErrorMessage, mockLoginReducerInitialState, mockFeedInitialState, mockPosts} from '../../mockValues';
import { applyGetPostsFailure, applyGetPostsRequest, applyGetPostsSuccess } from '../../../src/model/appliers/feedReducerAppliers';

const mockLoginSuccessState = {...mockLoginReducerInitialState, token: mockToken};
const mockLoginFailureState = {...mockLoginReducerInitialState, error: mockErrorMessage};

const mockGetPostsSuccessState = {...mockFeedInitialState, posts: mockPosts};
const mockGetPostsFailureState = {...mockFeedInitialState, error: mockErrorMessage};


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