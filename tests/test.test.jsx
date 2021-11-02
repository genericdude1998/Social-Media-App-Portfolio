import { shallow } from 'enzyme';
import React from 'react';

const TestTest = () => {
    return (
        <div>
            
        </div>
    );
}

const wrapper = shallow(<TestTest/>);

it('should render', () => {
    expect(wrapper.type()).toBe('div');
});
