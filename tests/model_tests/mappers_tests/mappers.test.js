import { doGetPostsThunk, doGetUserThunk, doSendPostThunk, doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../../src/model/actionCreators/actionCreators';
import { feedStateSelector, loginStateSelector, NPCStateSelector, userInfoStateSelector } from '../../../src/model/selectors/selectors';
import { mapLoginDispatchToProps, mapLoginStateToProps, mapFeedDispatchToProps, mapFeedStateToProps, mapUserStateToProps, mapUserDispatchToProps, mapNPCDispatchToProps, mapNPCStateToProps } from '../../../src/view/mappers/mappers';
import {mockContent, mockEvent, mockId, mockPassword, mockStoreInitialState, mockToken, mockUsername} from '../../mockValues'

const mockDispatch =  jest.fn();

jest.mock('../../../src/model/actionCreators/actionCreators');
jest.mock('../../../src/model/selectors/selectors');



let mappedLoginDispatchObject;
let mappedFeedDispatchObject;
let mappedUserDispatchObject;
let mappedNPCDispatchObject; 

beforeEach(() => {
    mappedLoginDispatchObject = mapLoginDispatchToProps(mockDispatch);
    mappedFeedDispatchObject = mapFeedDispatchToProps(mockDispatch);
    mappedUserDispatchObject = mapUserDispatchToProps(mockDispatch);
    mappedNPCDispatchObject = mapNPCDispatchToProps(mockDispatch)
})

afterEach(() => {
    jest.clearAllMocks();
})

describe('mapLoginDispatchToProps', () => {
    it('should return an object with onChangePassword and onChangeUsername handlers', () => {
        expect(typeof(mappedLoginDispatchObject)).toBe('object');
        expect(typeof(mappedLoginDispatchObject.onChangeUsername)).toBe('function');
        expect(typeof(mappedLoginDispatchObject.onChangePassword)).toBe('function');
        expect(typeof(mappedLoginDispatchObject.onSubmitLogin)).toBe('function');

    });
});
describe('onChangeUsername', () => {
    it('should call dispatch with expected params', () => {
        mappedLoginDispatchObject.onChangeUsername(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetUsername(mockEvent.target.value));
    });
});
describe('onChangePassword', () => {
    it('should call dispatch with expected params', () => {
        mappedLoginDispatchObject.onChangePassword(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetPassword(mockEvent.target.value));
    });
});

describe('onSubmitLogin', () => {
    it('should call dispatch with expected params', () => {
        const eventHandler = mappedLoginDispatchObject.onSubmitLogin(mockUsername,mockPassword);
        expect(typeof(eventHandler)).toBe('function');
        eventHandler(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSendUsernameAndPasswordThunk(mockUsername,mockPassword));    
    });
});

describe('mapLoginStateToProps', () => {
    it('should return expected state', () => {
        mapLoginStateToProps(mockStoreInitialState);
        expect(loginStateSelector).toHaveBeenCalledWith(mockStoreInitialState)
    });
});

describe('mapFeedDispatchToProps', () => {
    it('should return an object with onChangePassword and onChangeUsername handlers', () => {
        expect(typeof(mappedFeedDispatchObject)).toBe('object');
        expect(typeof(mappedFeedDispatchObject.onFetchPosts)).toBe('function');
    });
    it('should call onFetchPosts with expected params', () => {
        mappedFeedDispatchObject.onFetchPosts(mockToken);
        expect(mockDispatch).toHaveBeenCalledWith(doGetPostsThunk(mockToken));
    });
});

describe('mapFeedStateToProps', () => {
    it('should return expected state', () => {
        mapFeedStateToProps(mockStoreInitialState);
        expect(feedStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapUserDispatchToProps', () => {
    it('should return an object with onFetchUser handler', () => {
        expect(typeof(mappedUserDispatchObject)).toBe('object');
        expect(typeof(mappedUserDispatchObject.onFetchUser)).toBe('function');
    });
    it('should call onFetchUser with expected params', () => {
        mappedUserDispatchObject.onFetchUser(mockId);
        expect(mockDispatch).toHaveBeenCalledWith(doGetUserThunk(mockId));
    });
});

describe('mapUserStateToProps', () => {
    it('should return expected state', () => {
        mapUserStateToProps(mockStoreInitialState);
        expect(userInfoStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapNPCdispatchToProps', () => {
    it('should return an object with onSendNewPost handler', () => {
        expect(typeof(mappedNPCDispatchObject)).toBe('object');
        expect(typeof(mappedNPCDispatchObject.onSendNewPost)).toBe('function');
    });
    it('should call onSendNewPost with expected params', () => {
        const handler = mappedNPCDispatchObject.onSendNewPost(mockContent);
        handler();
        expect(mockDispatch).toHaveBeenCalledWith(doSendPostThunk(mockContent));
    });
});

describe('mapNPCStateToProps', () => {
    it('should return expected state', () => {
        mapNPCStateToProps(mockStoreInitialState);
        expect(NPCStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});