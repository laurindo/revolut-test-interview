import * as types from '../constants/ActionTypes';

const initialState = {
  valueSelected: 0,
  valueConverted: 0,
  selectedCurrencyConversion: {},
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

    default:
      return state;
  }
}
