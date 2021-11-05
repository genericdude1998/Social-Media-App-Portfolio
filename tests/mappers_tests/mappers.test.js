import { doSetPassword, doSetUsername } from '../../src/model/actionCreators/actionCreators';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../../src/view/mappers/mappers';
import {mockLoginReducerInitialState, mockPassword, mockUsername} from '../mockValues'

const mockDispatch =  jest.fn();

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
        mappedObject.onChangeUsername(mockUsername);
        expect(mockDispatch).toHaveBeenCalledWith(doSetUsername(mockUsername));
    });
});
describe('onChangePassword', () => {
    it('should call dispatch with expected params', () => {
        mappedObject.onChangePassword(mockPassword);
        expect(mockDispatch).toHaveBeenCalledWith(doSetPassword(mockPassword));
    });
});

describe('mapLoginStateToProps', () => {
    it('should return state', () => {
        expect(mapLoginStateToProps(mockLoginReducerInitialState)).toEqual(mockLoginReducerInitialState);
    });
});