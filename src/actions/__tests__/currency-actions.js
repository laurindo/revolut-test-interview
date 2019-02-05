import * as actions from '../CurrencyActions';
import * as types from '../../constants/ActionTypes';

test('#01 Testing Add Friends Actions', () => {
  const payload = [{
    label: 'United Arab Emirates Dirham',
    value: 'AED',
  }];

  const expectedAction = {
    type: types.GET_CURRENCIES,
    payload,
  };

  expect(actions.getCurrencies().type).toBe('GET_CURRENCIES');
});
