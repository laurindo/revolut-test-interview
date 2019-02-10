import * as actions from '../ConverterActions';
import * as types from '../../constants/ActionTypes';

describe('CONVERTER ACTIONS', () => {
  test('should mountSelectCurrencies', () => {
    const payload = {
      balances: [],
      currentBalance: {},
      quotations: [],
    };

    const expectedAction = {
      type: types.MOUNT_SELECT_CURRENCIES,
      payload,
    };

    const result = actions.mountSelectCurrencies([], {}, []);

    expect(actions.mountSelectCurrencies().type).toBe('MOUNT_SELECT_CURRENCIES');
    expect(expectedAction).toEqual(result);
  });
});
