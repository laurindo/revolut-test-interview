import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ConvertedCurrencyGrid from '../index';

configure({ adapter: new Adapter() });

describe('Converted CUrrency Grid Component', () => {
  test('should render the component', () => {
    const props= {
      loading: false,
    };

    const component = shallow(
      <ConvertedCurrencyGrid
        valuesTitle={['Currency', 'Unit Price', 'Balance Total']}
        props={ props }
        currencyConversion={ () => ['USD', '$ 1.00', '$ 1.34'] } />
    );

    expect(component).toMatchSnapshot();
    expect(component.find('.row')).toBeDefined();
    expect(component.find('.row').get(0).props.className).toEqual('row');
    expect(component.find('.row').get(0).props.children.props.loading).toEqual(false);
    expect(component.find('.row').get(0).props.children.props.valuesTitle[0]).toEqual('Currency');
    expect(component.find('.row').get(0).props.children.props.valuesTitle[1]).toEqual('Unit Price');
    expect(component.find('.row').get(0).props.children.props.valuesTitle[2]).toEqual('Balance Total');

    expect(component.find('.row').get(0).props.children.props.valuesRows[0]).toEqual('USD');
    expect(component.find('.row').get(0).props.children.props.valuesRows[1]).toEqual('$ 1.00');
    expect(component.find('.row').get(0).props.children.props.valuesRows[2]).toEqual('$ 1.34');
  });
});
