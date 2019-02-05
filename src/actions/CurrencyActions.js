import * as types from '../constants/ActionTypes';

export function getCurrencies(currencies) {
  return {
    type: types.GET_CURRENCIES,
    payload: currencies,
  };
}

export function changeCurrency(selectedCurrency) {
  return {
    type: types.CHANGE_CURRENCY,
    payload: selectedCurrency,
  };
}
