import { shallow } from "enzyme";
import withTheme from "../../src/view/theme/withTheme";
import React from 'react';
import { ThemeContext } from "../../src/view/ThemeProvider";

let wrapper;

beforeEach(() => {
    const HOCComponent = withTheme(MockWrappedComponent);
    wrapper = shallow(<HOCComponent />);
})

const MockWrappedComponent = ({theme}) => {return null};

jest.spyOn(React, 'useContext').mockImplementation(() => {return {theme:'mock_theme'}});

describe('withTheme', () => {
    it('should return a function', () => {
        expect(typeof(withTheme(MockWrappedComponent))).toBe('function');
    });
    it('should call useContext with expected params', () => {
        expect(React.useContext).toHaveBeenCalledWith(ThemeContext);
    });
    it('should return a component with theme as props', () => {
        expect(wrapper.find(MockWrappedComponent).prop('theme')).toBe('mock_theme');
    });
});