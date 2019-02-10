import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from '../index';

configure({ adapter: new Adapter() });

describe('Button Component', () => {
  test('should render the component', () => {
    const _click = (param) => {
      expect(param).toBe(true);
    };
    const component = shallow(<Button className="primary" title="MY BUTTON" onClick={ () => { _click(true); } } />);
    expect(component.find('button').get(0).props.className).toEqual('primary');
    expect(component.find('button').get(0).props.children).toEqual('MY BUTTON');
    component.find('button').simulate('click');
  });
});
