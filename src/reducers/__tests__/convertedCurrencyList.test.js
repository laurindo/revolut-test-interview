import * as types from '../../constants/ActionTypes';
import convertedCurrencyListReducer from '../convertedCurrencyList';

describe('Converted Currency List Reducer', () => {
  test('should perform reducer correctly', () => {
    const expected = {
      convertedValues: [],
      loading: false,
    };

    let result = convertedCurrencyListReducer(undefined, {});
    expect(result).toEqual(expected);

    result = convertedCurrencyListReducer(undefined, { type: types.SUCCESS_CURRENCY_CONVERTED, payload: [{ value: 1 }, { error: 'triggered some error!!!' }] });
    expect(result.convertedValues.length).toEqual(1);

    result = convertedCurrencyListReducer(undefined, { type: types.LOADING_CONVERTED_CURRENCY_LIST });
    expect(result.loading).toEqual(true);

    result = convertedCurrencyListReducer(undefined, { type: types.LOADED_CONVERTED_CURRENCY_LIST });
    expect(result.loading).toEqual(false);
  });
});
