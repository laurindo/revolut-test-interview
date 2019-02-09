import * as types from '../constants/ActionTypes';

export function mountSelectCurrencies(balances, currentBalance, convertedValues) {
  return {
    type: types.MOUNT_SELECT_CURRENCIES,
    payload: {
      balances,
      currentBalance,
      quotations: convertedValues,
    },
  };
}
