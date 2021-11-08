import { doSendUsernameAndPasswordThunk, doSetPassword, doSetUsername } from '../../../src/model/actionCreators/actionCreators';
import { mapLoginDispatchToProps, mapLoginStateToProps } from '../../../src/view/mappers/mappers';
import {mockEvent, mockLoginReducerInitialState, mockPassword, mockUsername} from '../../mockValues'

const mockDispatch =  jest.fn();

jest.mock('../../../src/model/actionCreators/actionCreators');


let mappedObject;

beforeEach(() => {
    mappedObject = mapLoginDispatchToProps(mockDispatch);
})

afterEach(() => {
    jest.clearAllMocks();
})

describe('mapLoginDispatchToProps', () => {
    it('should return an object with onChangePassword and onChangeUsername handlers', () => {
        expect(typeof(mappedObject)).toBe('object');
        expect(typeof(mappedObject.onChangeUsername)).toBe('function');
        expect(typeof(mappedObject.onChangePassword)).toBe('function');
        expect(typeof(mappedObject.onSubmitLogin)).toBe('function');

    });
});
describe('onChangeUsername', () => {
    it('should call dispatch with expected params', () => {
        mappedObject.onChangeUsername(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetUsername(mockEvent.target.value));
    });
});
describe('onChangePassword', () => {
    it('should call dispatch with expected params', () => {
        mappedObject.onChangePassword(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSetPassword(mockEvent.target.value));
    });
});

describe('onSubmitLogin', () => {
    it('should call dispatch with expected params', () => {
        const eventHandler = mappedObject.onSubmitLogin(mockUsername,mockPassword);
        expect(typeof(eventHandler)).toBe('function');
        eventHandler(mockEvent);
        expect(mockDispatch).toHaveBeenCalledWith(doSendUsernameAndPasswordThunk(mockUsername,mockPassword));    
    });
});

describe('mapLoginStateToProps', () => {
    it('should return state', () => {
        expect(mapLoginStateToProps(mockLoginReducerInitialState)).toEqual(mockLoginReducerInitialState);
    });
});