import * as types from '../../constants/ActionTypes';
import converterReducer from '../converter';

describe('Converter Reducer', () => {
  const expected = {
    currencies: [],
    valueSelected: '',
    valueConverted: '',
    selectedCurrency: {
      label: '',
      value: 0,
      symbol: '',
      quotation: '',
      currency: '',
    },
    selectedCurrencyConversion: {
      label: '',
      value: 0,
      symbol: '',
      quotation: '',
      currency: '',
    },
  };

  test('should perform reducer correctly', () => {
    let result = converterReducer(undefined, {});
    expect(result).toEqual(expected);

    result = converterReducer(undefined, { type: types.CHANGE_SELECTED_CURRENCY, payload: { currency: 'USD' } });
    expect(result.selectedCurrency.currency).toEqual('USD');

    result = converterReducer(undefined, { type: types.CHANGE_VALUE_SELECTED, payload: '-22' });
    expect(result.valueSelected).toEqual('-22');

    const newExpected = {
      ...expected,
      selectedCurrencyConversion: {
        quotation: 2,
      },
    };
    result = converterReducer(newExpected, { type: types.CHANGE_VALUE_CONVERTED, payload: '2' });
    expect(result.valueConverted).toEqual(4);
  });

  test('should perform action CHANGE_VALUE_CONVERTED_FROM_COMBOBOX correctly', () => {
    const newExpected = {
      ...expected,
      valueSelected: 10,
      selectedCurrencyConversion: {
        quotation: 2,
      },
    };

    let result = converterReducer(newExpected, { type: types.CHANGE_VALUE_CONVERTED_FROM_COMBOBOX, payload: '-2' });
    expect(result.valueConverted).toEqual(20);
  });

  test('should perform action MOUNT_SELECT_CURRENCIES correctly', () => {
    const action = {
      payload: {"balances":[{"currency":"USD","value":90.08,"symbol":"$","label":"USD"},{"currency":"GBP","value":290.08,"symbol":"£","label":"GBP"},{"currency":"EUR","value":190.08,"symbol":"€","label":"EUR"}],"currentBalance":{"currency":"USD","value":90.08,"symbol":"$","label":"USD"},"quotations":[{"currency":"USD/EUR","value":"0.88317","date":"2019-02-10 20:30:18","type":"reversed"},{"currency":"USD/GBP","value":"0.77316","date":"2019-02-10 20:30:18","type":"reversed"},{"currency":"USD/BRL","value":"3.73175","date":"2019-02-10 20:30:18","type":"original"}]}
    };
    const state = {"currencies":[{"currency":"USD","value":90.08,"symbol":"$","label":"USD","quotation":"0"},{"currency":"GBP","value":290.08,"symbol":"£","label":"GBP","quotation":"0.77316"},{"currency":"EUR","value":190.08,"symbol":"€","label":"EUR","quotation":"0.88317"}],"valueSelected":0,"valueConverted":0,"selectedCurrency":{"currency":"USD","value":90.08,"symbol":"$","label":"USD"},"selectedCurrencyConversion":{"quotation":"0.88317","currency":"EUR","value":190.08,"symbol":"€","label":"EUR"}};

    let result = converterReducer(state, { type: types.MOUNT_SELECT_CURRENCIES, payload: action.payload });

    expect(result.valueSelected).toEqual(0);
    expect(result.valueConverted).toEqual(0);
    expect(result.currencies).toEqual([ { currency: 'USD', value: 90.08, symbol: '$', label: 'USD', quotation: '0' }, { currency: 'GBP', value: 290.08, symbol: '£', label: 'GBP', quotation: '0.77316' }, { currency: 'EUR', value: 190.08, symbol: '€', label: 'EUR', quotation: '0.88317' } ]);
    expect(result.selectedCurrency).toEqual({ currency: 'USD', value: 90.08, symbol: '$', label: 'USD' });
    expect(result.selectedCurrencyConversion).toEqual({ quotation: '0.88317', currency: 'EUR', value: 190.08, symbol: '€', label: 'EUR' });
  });
});
