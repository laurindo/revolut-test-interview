import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../index';

configure({ adapter: new Adapter() });

describe('Modal Component', () => {
  test('should render the component', () => {
    const component = mount(<Modal><div>modal test!!!</div></Modal>);
    expect(component.find('.modal').get(0).props.className).toEqual('modal');
    expect(component.find('.modal').get(0).props.children.props.className).toEqual('modal_inner');
    expect(component.find('.modal_inner div').get(0).props.children.props.children).toEqual('modal test!!!');

    const component2 = shallow(<Modal><div>modal test!!!</div></Modal>);
    expect(component2.find('.modal_inner div')).toHaveLength(2);
  });
});
