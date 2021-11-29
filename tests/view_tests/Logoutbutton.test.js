import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';
import ConnectedLogoutButton, { Logoutbutton } from '../../src/view/Feed/LogoutButton';
import { mapLogoutDispatchToProps } from '../../src/view/mappers/mappers';

jest.mock('react-redux', () => {
    return {
        connect: jest.fn(() => {
            return jest.fn().mockImplementation(ReactComponent => {
                return ReactComponent
            });
        }) ,
        Provider: ({ children }) => children,
    }
});

describe('ConnectedLogOutButton', () => {
    it('should call connect with expected params', () => {
        expect(connect).toHaveBeenCalledWith(undefined, mapLogoutDispatchToProps);
        expect(ConnectedLogoutButton).toBe(Logoutbutton);
    });
    it('should matchSnapshot', () => {
        const wrapper = shallow(<Logoutbutton onLogoutUser={jest.fn()} />);
        expect(wrapper).toMatchSnapshot();
    });
});
