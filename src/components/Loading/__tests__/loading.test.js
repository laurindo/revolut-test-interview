import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Loading from '../index';

configure({ adapter: new Adapter() });

describe('Loading Component', () => {
  test('should render the component', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
    expect(component.find('.loading')).toBeDefined();
    expect(component.find('.loading').get(0).props.children.props.src).toEqual('ripple.svg');
    expect(component.find('.loading').get(0).props.children.props.alt).toEqual('loading');
    expect(component.find('.loading').get(0).props.children.type).toEqual('img');
  });
});
