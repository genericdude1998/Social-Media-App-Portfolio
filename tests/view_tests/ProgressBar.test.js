import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '../../src/view/Feed/ProgressBar';

const wrapper = shallow(
    <ProgressBar
        label={'test_label'}
    />);

it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();    
});