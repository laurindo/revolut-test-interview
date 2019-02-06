import * as types from '../constants/ActionTypes';

const initialState = {
  convertedValues: [],
};

export default function convertedCurrencyList(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_CURRENCY_CONVERTED:
      return {
        ...state,
        convertedValues: action.payload,
      };
    default:
      return state;
  }
}
