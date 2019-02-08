import * as types from '../constants/ActionTypes';

const initialState = {
  currencies: [],
  selectedCurrency: {},
  fetching: false,
  error: false,
};

export default function currency(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_CURRENCY_NAMES:
      return {
        ...state,
        currencies: action.payload,
      };

    case types.CHANGE_CURRENCY:
      return {
        ...state,
        selectedCurrency: action.payload,
      };

    case types.REQUEST_CURRENCIES:
      return {
        ...state,
        currencies: action.payload,
      };

    default:
      return state;
  }
}
