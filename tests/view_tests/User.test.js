import React from 'react'
import { shallow } from 'enzyme';
import ConnectedUser from '../../src/view/UsersInfo/User';
import {mockId, mockUser} from '../mockValues';

jest.spyOn(React, 'useEffect').mockImplementation((effect) => effect());
jest.mock('react-router-dom', () => {
    const originalModule = jest.requireActual('react-router-dom');
    return {
        __esModule:true,
        ...originalModule,
        useParams: jest.fn(() => {return{id: mockId}}),
    }
});

const mockOnFetchUser = jest.fn();

let wrapper = shallow(<ConnectedUser.WrappedComponent
    user={mockUser}
    onFetchUser={mockOnFetchUser}
/>);

describe('User', () => {
    it('should call OnFetchUser with expected params', () => {
        expect(mockOnFetchUser).toHaveBeenCalledWith(mockId);
    });
    it('should match snapshot if user is not undefined', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should match snapshot if list is undefined', () => {
        let wrapper = shallow(<ConnectedUser.WrappedComponent
            user={undefined}
            onFetchUser={mockOnFetchUser}
        />);
        expect(wrapper).toMatchSnapshot();
    });
});
