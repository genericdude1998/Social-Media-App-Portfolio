import { applySetUsername, applySetPassword } from '../../../src/model/appliers/loginReducerAppliers';
import { doSetUsername, doSetPassword } from '../../../src/model/actionCreators/actionCreators';

const initialState = {username:'', password:'', token:null};
const mockUsername = 'username';
const mockPassword = 'password';

describe('applySetUsername', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetUsername(initialState, doSetUsername(mockUsername))).toEqual({...initialState, username:mockUsername});
    });
});

describe('applySetPassword', () => {
    it('should return a new state with the updated username', () => {
        expect(applySetPassword(initialState, doSetPassword(mockPassword))).toEqual({...initialState, password:mockPassword});
    });
});