import * as types from '../constants/ActionTypes';

const initialState = {
  currencies: [],
  valueSelected: 0,
  valueConverted: 0,
  selectedCurrency: {
    label: '',
    value: 0,
  },
  selectedCurrencyConversion: {
    label: '',
    value: 0,
  },
};

export default function converter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_VALUE_SELECTED:
      return {
        ...state,
        valueSelected: action.payload,
      };

    case types.CHANGE_VALUE_CONVERTED:
      return {
        ...state,
        valueConverted: action.payload,
      };

    case types.SELECT_CURRENCY_CONVERSION:
      return {
        ...state,
        selectedCurrencyConversion: action.payload,
      };

    case types.MOUNT_SELECT_CURRENCIES:
      return {
        ...state,
        selectedCurrency: {
          label: action.payload.currentBalance.currency,
          value: action.payload.currentBalance.value,
        },
        currencies: action.payload.balances.map(balance => {
          return {
            label: balance.currency,
            value: balance.value,
          };
        }),
      };

    default:
      return state;
  }
}
