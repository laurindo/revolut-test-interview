import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Title from '../index';

configure({ adapter: new Adapter() });

describe('Title Component', () => {
  test('should render the component', () => {
    const component = shallow(<Title title="Hello!!!" />);
    expect(component).toMatchSnapshot();
    expect(component.find('h2')).toBeDefined();
  });
});
