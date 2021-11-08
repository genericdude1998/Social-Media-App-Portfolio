import { loginStateSelector } from '../../../src/model/selectors/selectors';
import { mockLoginReducerInitialState, mockStoreInitialState } from '../../mockValues';

describe('loginStateSelector', () => {
    it('should return the login state', () => {
        expect(loginStateSelector(mockStoreInitialState)).toEqual(mockLoginReducerInitialState);
    });
});