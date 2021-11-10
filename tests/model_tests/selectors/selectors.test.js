import { feedStateSelector, loginStateSelector, userInfoStateSelector } from '../../../src/model/selectors/selectors';
import { mockFeedInitialState, mockLoginReducerInitialState, mockStoreInitialState, mockUserInfoInitialState } from '../../mockValues';

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