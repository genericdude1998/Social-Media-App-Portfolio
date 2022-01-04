import { doGetPostsThunk, doGetUserThunk, doOpenComments, doSendCommentThunk, doSendPostThunk, doSendUsernameAndPasswordThunk, doSetCommentContent, doSetPassword, doSetPostContent, doSetUsername, doToggleTheme, doUserLogout } from '../../../src/model/actionCreators/actionCreators';
import { feedStateSelector, loginStateSelector, NCCStateSelector, NPCStateSelector, themeStateSelector, tokenStateSelector, userInfoStateSelector } from '../../../src/model/selectors/selectors';
import { mapLoginDispatchToProps, mapLoginStateToProps, mapFeedDispatchToProps, mapFeedStateToProps, mapUserStateToProps, mapUserDispatchToProps, mapNPCDispatchToProps, mapNPCStateToProps, mapThemeDispatchToProps, mapThemeStateToProps, mapCommentsDispatchToProps, mapNCCDispatchToProps, mapNCCStateToProps, mapTokenStateToProps, mapLogoutDispatchToProps } from '../../../src/view/mappers/mappers';
import {mockContent, mockEvent, mockId, mockNavigate, mockPassword, mockStoreInitialState, mockToken, mockUsername} from '../../mockValues'

const mockDispatch =  jest.fn();

jest.mock('../../../src/model/actionCreators/actionCreators');
jest.mock('../../../src/model/selectors/selectors');



let mappedLoginDispatchObject;
let mappedFeedDispatchObject;
let mappedUserDispatchObject;
let mappedNPCDispatchObject;
let mappedThemeDispatchObject;
let mappedCommentsDispatchObject;
let mappedNCCDispatchObject;


beforeEach(() => {
    mappedLoginDispatchObject = mapLoginDispatchToProps(mockDispatch);
    mappedFeedDispatchObject = mapFeedDispatchToProps(mockDispatch);
    mappedUserDispatchObject = mapUserDispatchToProps(mockDispatch);
    mappedNPCDispatchObject = mapNPCDispatchToProps(mockDispatch);
    mappedThemeDispatchObject = mapThemeDispatchToProps(mockDispatch);
    mappedCommentsDispatchObject = mapCommentsDispatchToProps(mockDispatch);
    mappedNCCDispatchObject = mapNCCDispatchToProps(mockDispatch);
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
    it('should return an object with onSendNewPost and onSetPostContent handler', () => {
        expect(typeof(mappedNPCDispatchObject)).toBe('object');
        expect(typeof(mappedNPCDispatchObject.onSendNewPost)).toBe('function');
        expect(typeof(mappedNPCDispatchObject.onSetPostContent)).toBe('function');

    });
    it('should call onSendNewPost with expected params', () => {
        const handler = mappedNPCDispatchObject.onSendNewPost(mockContent);
        handler();
        expect(mockDispatch).toHaveBeenCalledWith(doSendPostThunk(mockContent));
    });
    it('should call onSetPostContent with expected params', () => {
        mappedNPCDispatchObject.onSetPostContent(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetPostContent(mockEvent.target.value));
    });
});

describe('mapNPCStateToProps', () => {
    it('should return expected state', () => {
        mapNPCStateToProps(mockStoreInitialState);
        expect(NPCStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapThemeDispatchToProps', () => {
    it('should return an object with onToggleTheme handler', () => {
        expect(typeof(mappedThemeDispatchObject)).toBe('object');
        expect(typeof(mappedThemeDispatchObject.onToggleTheme)).toBe('function');
    });
    it('should call onToggleTheme with expected params', () => {
        const handler = mappedThemeDispatchObject.onToggleTheme;
        handler();
        expect(mockDispatch).toHaveBeenCalledWith(doToggleTheme());
    });
});

describe('mapThemeStateToProps', () => {
    it('should return expected state', () => {
        mapThemeStateToProps(mockStoreInitialState);
        expect(themeStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapCommentsDispatchToProps', () => {
    it('should return an object with onSendNewPost and onSetPostContent handler', () => {
        expect(typeof(mappedCommentsDispatchObject)).toBe('object');
        expect(typeof(mappedCommentsDispatchObject.onOpenComments)).toBe('function');
        expect(typeof(mappedCommentsDispatchObject.onCloseComments)).toBe('function');

    });
    it('should call onCloseComments with expected params', () => {
        const handler = mappedCommentsDispatchObject.onCloseComments;
        handler(mockId);
        expect(mockDispatch).toHaveBeenCalledWith(doOpenComments(mockId));
    });
    it('should call onOpen with expected params', () => {
        const handler = mappedCommentsDispatchObject.onOpenComments;
        handler(mockId);
        expect(mockDispatch).toHaveBeenCalledWith(doOpenComments(mockId));
    });
});

describe('mapNCCDispatchToProps', () => {
    it('should return an object with onSendNewPost and onSetPostContent handler', () => {
        expect(typeof(mappedNCCDispatchObject)).toBe('object');
        expect(typeof(mappedNCCDispatchObject.onSetCommentContent)).toBe('function');
        expect(typeof(mappedNCCDispatchObject.onSendNewComment)).toBe('function');

    });
    it('should call onSetCommentContent with expected params', () => {
        const handler = mappedNCCDispatchObject.onSetCommentContent;
        handler(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetCommentContent(mockEvent.target.value));
    });
    it('should call onSendNewComment with expected params', () => {
        const handler = mappedNCCDispatchObject.onSendNewComment;
        handler(mockContent, mockNavigate, mockId)(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSendCommentThunk(mockContent,mockEvent, mockNavigate, mockId));
    });
});
describe('mapNCCStateToProps', () => {
    it('should return expected state', () => {
        mapNCCStateToProps(mockStoreInitialState);
        expect(NCCStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapTokenStateToProps', () => {
    it('should return exprectedState', () => {
        mapTokenStateToProps(mockStoreInitialState);
        expect(tokenStateSelector).toHaveBeenCalledWith(mockStoreInitialState);
    });
});

describe('mapLogoutDispatchToProps', () => {
    it('should return an object with onLogoutuser func', () => {
        expect(typeof(mapLogoutDispatchToProps(mockDispatch))).toBe('object');
        expect(typeof(mapLogoutDispatchToProps(mockDispatch).onLogoutUser)).toBe('function');
    });
    it('should call dispatch with expected params', () => {
        mapLogoutDispatchToProps(mockDispatch).onLogoutUser();
        expect(mockDispatch).toHaveBeenCalledWith(doUserLogout());
    });
});