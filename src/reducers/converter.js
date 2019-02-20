import * as types from '../constants/ActionTypes';
import {
  validateCurrencyNumber,
  convertNumber,
  keepNumberPositive,
} from '../utils/GeneralUtils';

import { getDefaultBalanceCurrencyConversion } from '../utils/BalanceUtils';
import { getValueFromQuotation, calculatingQuotation } from '../utils/QuotationUtils';
import { showValueFormatted } from '../utils/GeneralUtils';

const initialState = {
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

export default function converter(state = initialState, action) {
  switch (action.type) {
    case types.CLEAR_CONVERTER:
      return {
        ...initialState,
      };

    case types.CHANGE_SELECTED_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };

    case types.CHANGE_VALUE_SELECTED:
      return {
        ...state,
        valueSelected: action.payload, //validateCurrencyNumber(showValueFormatted(action.payload)),
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
          quotation: (action.payload.quotations[0]) ? action.payload.quotations[0].value : '',
          ...getDefaultBalanceCurrencyConversion(action.payload.balances, action.payload.quotations),
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
