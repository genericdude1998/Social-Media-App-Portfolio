import { doGetPostsThunk, doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../../src/model/actionCreators/actionCreators';
import { mapLoginDispatchToProps, mapLoginStateToProps, mapFeedDispatchToProps, mapFeedStateToProps, mapAppStateToProps } from '../../../src/view/mappers/mappers';
import {mockAppInitialState, mockEvent, mockFeedInitialState, mockLoginReducerInitialState, mockPassword, mockStoreInitialState, mockToken, mockUsername} from '../../mockValues'

const mockDispatch =  jest.fn();

jest.mock('../../../src/model/actionCreators/actionCreators');


let mappedLoginDispatchObject;
let mappedFeedDispatchObject;

beforeEach(() => {
    mappedLoginDispatchObject = mapLoginDispatchToProps(mockDispatch);
    mappedFeedDispatchObject = mapFeedDispatchToProps(mockDispatch);

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
        expect(mapLoginStateToProps(mockStoreInitialState)).toEqual(mockLoginReducerInitialState);
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
        expect(mapFeedStateToProps(mockStoreInitialState)).toEqual(mockFeedInitialState);
    });
});

describe('mapAppStateToProps', () => {
    it('should return expected state', () => {
        expect(mapAppStateToProps(mockStoreInitialState)).toEqual(mockAppInitialState);
    });
});