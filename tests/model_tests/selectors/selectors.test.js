import { feedStateSelector, loginStateSelector } from '../../../src/model/selectors/selectors';
import { mockFeedInitialState, mockLoginReducerInitialState, mockStoreInitialState } from '../../mockValues';

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