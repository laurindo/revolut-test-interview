import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Quotation from '../index';

configure({ adapter: new Adapter() });

describe('Quotation Component', () => {
  test('should render the component', () => {
    const component = shallow(<Quotation symbol="$" currency="USD" value={"12.99"} />);
    expect(component).toMatchSnapshot();
    expect(component.find('small')).toBeDefined();
    expect(component.find('small').get(0).props.className).toEqual('quotation-text');
    expect(component.find('small').text()).toEqual(' $ 12.99 USD');
  });
});
