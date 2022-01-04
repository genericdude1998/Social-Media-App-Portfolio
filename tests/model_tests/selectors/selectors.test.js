import { feedStateSelector, loginStateSelector, NCCStateSelector, NPCStateSelector, themeStateSelector, tokenStateSelector, userInfoStateSelector } from '../../../src/model/selectors/selectors';
import { mockFeedInitialState, mockLoginReducerInitialState, mockNCCInitialState, mockNPCInitialState, mockStoreInitialState, mockThemeInitialState, mockTokenInitialState, mockUserInfoInitialState } from '../../mockValues';

describe('loginStateSelector', () => {
    it('should return the login state', () => {
        expect(loginStateSelector(mockStoreInitialState)).toEqual(mockLoginReducerInitialState);
    });
});

describe('feedStateSelector', () => {
    it('should return the feed state', () => {
        expect(feedStateSelector(mockStoreInitialState)).toEqual(mockFeedInitialState);
    });
});

describe('userInfoStateSelector', () => {
    it('should return the userInfo state', () => {
        expect(userInfoStateSelector(mockStoreInitialState)).toEqual(mockUserInfoInitialState);
    });
});

describe('NPCStateSelector', () => {
    it('should return the NPC state', () => {
        expect(NPCStateSelector(mockStoreInitialState)).toEqual(mockNPCInitialState);
    });
});
describe('NCCStateSelector', () => {
    it('should return the NCC state', () => {
        expect(NCCStateSelector(mockStoreInitialState)).toEqual(mockNCCInitialState);
    });
});

describe('themeStateSelector', () => {
    it('should return the NCC state', () => {
        expect(themeStateSelector(mockStoreInitialState)).toEqual(mockThemeInitialState);
    });
});

describe('tokenStateSelector', () => {
    it('should return token', () => {
        expect(tokenStateSelector(mockStoreInitialState)).toEqual(mockTokenInitialState);
    });
});