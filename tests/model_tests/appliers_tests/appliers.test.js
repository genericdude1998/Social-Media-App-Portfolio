import { applySetUsername, applySetPassword } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword } from '../../../src/model/actionCreators/actionCreators';
import {mockInitialState, mockUsername, mockPassword} from '../../mockValues';

describe('applySetUsername', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetUsername(mockInitialState, doSetUsername(mockUsername))).toEqual({...mockInitialState, username:mockUsername});
    });
});

describe('applySetPassword', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetPassword(mockInitialState, doSetPassword(mockPassword))).toEqual({...mockInitialState, password:mockPassword});
    });
});