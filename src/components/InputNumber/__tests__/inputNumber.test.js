import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import InputNumber from '../index';

configure({ adapter: new Adapter() });

describe('InputNumber Component', () => {
  test('should render the component', () => {
    const component = shallow(<InputNumber value="2" onChange={() => { }} />);
    expect(component).toMatchSnapshot();
    expect(component.find('input')).toBeDefined();
    expect(component.find('input').get(0).props.className).toEqual('input-number');
    expect(component.find('input').get(0).props.readOnly).toEqual(false);
    expect(component.find('input').get(0).props.type).toEqual('text');
    expect(component.find('input').get(0).props.value).toEqual('2');
  });
});
