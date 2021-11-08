import { doSetPassword, doSetUsername } from '../../../src/model/actionCreators/actionCreators';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../../../src/view/mappers/mappers';
import {mockLoginReducerInitialState, mockPassword, mockUsername} from '../../mockValues'

const mockDispatch =  jest.fn();
const mockInputPasswordEvent = {target:{value:mockPassword}};
const mockInputUsernameEvent = {target:{value:mockUsername}};


let mappedObject;

beforeEach(() => {
    mappedObject = mapLoginDispatchToProps(mockDispatch);
})

describe('mapLoginDispatchToProps', () => {
    it('should return an object with onChangePassword and onChangeUsername handlers', () => {
        expect(typeof(mappedObject)).toBe('object');
        expect(typeof(mappedObject.onChangeUsername)).toBe('function');
        expect(typeof(mappedObject.onChangePassword)).toBe('function');
    });
});
describe('onChangeUsername', () => {
    it('should call dispatch with expected params', () => {
        mappedObject.onChangeUsername(mockInputUsernameEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetUsername(mockInputUsernameEvent.target.value));
    });
});
describe('onChangePassword', () => {
    it('should call dispatch with expected params', () => {
        mappedObject.onChangePassword(mockInputPasswordEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetPassword(mockInputPasswordEvent.target.value));
    });
});

describe('mapLoginStateToProps', () => {
    it('should return state', () => {
        expect(mapLoginStateToProps(mockLoginReducerInitialState)).toEqual(mockLoginReducerInitialState);
    });
});