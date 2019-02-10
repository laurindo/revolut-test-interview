import * as types from '../constants/ActionTypes';
import {
  validateCurrencyNumber,
  convertNumber,
  keepNumberPositive,
} from '../utils/GeneralUtils';

import { getValueFromQuotation, calculatingQuotation } from '../utils/QuotationUtils';

const initialState = {
  currencies: [],
  valueSelected: 0,
  valueConverted: 0,
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

export default function converter(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };

    case types.CHANGE_VALUE_SELECTED:
      return {
        ...state,
        valueSelected: validateCurrencyNumber(action.payload),
      };

    case types.CHANGE_VALUE_CONVERTED:
      return {
        ...state,
        valueConverted: keepNumberPositive(convertNumber(action.payload, state.selectedCurrencyConversion.quotation)),
      };

    case types.CHANGE_VALUE_CONVERTED_FROM_COMBOBOX:
      return {
        ...state,
        valueConverted: keepNumberPositive(convertNumber(state.valueSelected, state.selectedCurrencyConversion.quotation)),
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
          ...action.payload.currentBalance,
        },
        selectedCurrencyConversion: {
          quotation: action.payload.quotations[0].value,
          ...action.payload.balances.filter(balance => {
            return balance.currency === action.payload.quotations[0].currency.substr(4,3);
          })[0],
        },
        currencies: action.payload.balances.map(balance => {
          const currencySelected = action.payload.currentBalance.currency;
          const quotations = action.payload.quotations;
          return {
            ...balance,
            quotation: getValueFromQuotation(currencySelected, balance.currency, quotations),
          };
        }),
      };

    default:
      return state;
  }
}
