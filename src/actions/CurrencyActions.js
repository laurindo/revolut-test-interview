import * as types from '../constants/ActionTypes';

export function getCurrencies(currencies) {
  return {
    type: types.GET_CURRENCIES,
    payload: currencies,
  };
}

export function getCurrenciesConverted(currenciesConverted) {
  return {
    type: types.REQUEST_CURRENCY_CONVERTED,
    payload: currenciesConverted,
  };
}

export function changeCurrency(selectedCurrency) {
  return {
    type: types.CHANGE_CURRENCY,
    payload: selectedCurrency,
  };
}
