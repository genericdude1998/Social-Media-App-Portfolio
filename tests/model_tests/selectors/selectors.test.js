import { feedStateSelector, loginStateSelector } from '../../../src/model/selectors/selectors';
import { mapAppStateToProps } from '../../../src/view/mappers/mappers';
import { mockAppInitialState, mockFeedInitialState, mockLoginReducerInitialState, mockStoreInitialState } from '../../mockValues';

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

describe('mapAppStateToProps', () => {
    it('should return the app state', () => {
        expect(mapAppStateToProps(mockStoreInitialState)).toEqual(mockAppInitialState);
    }); 
});