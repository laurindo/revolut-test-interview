import * as actions from '../CurrencyActions';
import * as types from '../../constants/ActionTypes';

describe('CURRENCY ACTIONS', () => {
  test('should match the correct currency', () => {
    const payload = [{
      label: 'United Arab Emirates Dirham',
      value: 'AED',
    }];

    const expectedAction = {
      type: types.GET_CURRENCIES,
      payload,
    };

    const result = actions.getCurrencies(payload);

    expect(actions.getCurrencies().type).toBe('GET_CURRENCIES');
    expect(expectedAction).toEqual(result);
  });

  test('should match the correct currency', () => {
    const payload = [{
      label: 'United Arab Emirates Dirham',
      value: 'AED',
    }];

    const expectedAction = {
      type: types.REQUEST_CURRENCY_CONVERTED,
      payload,
    };

    const result = actions.getCurrenciesConverted(payload);

    expect(actions.getCurrenciesConverted().type).toBe('REQUEST_CURRENCY_CONVERTED');
    expect(expectedAction).toEqual(result);
  });

  test('should match the correct currency', () => {
    const payload = [{
      label: 'United Arab Emirates Dirham',
      value: 'AED',
    }];

    const expectedAction = {
      type: types.CHANGE_CURRENCY,
      payload,
    };

    const result = actions.changeCurrency(payload);

    expect(actions.changeCurrency().type).toBe('CHANGE_CURRENCY');
    expect(expectedAction).toEqual(result);
  });
});
