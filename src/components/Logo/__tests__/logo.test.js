import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from '../index';

configure({ adapter: new Adapter() });

describe('Logo Component', () => {
  test('should render the component', () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
    expect(component.find('.logo')).toBeDefined();
    expect(component.find('.logo').get(0).props.children.props.src).toEqual('logo.png');
    expect(component.find('.logo').get(0).props.children.props.alt).toEqual('revolut logo');
    expect(component.find('.logo').get(0).props.children.type).toEqual('img');
  });
});
