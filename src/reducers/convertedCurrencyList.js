import * as types from '../constants/ActionTypes';

const initialState = {
  convertedValues: [],
  loading: false,
};

export default function convertedCurrencyList(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_CURRENCY_CONVERTED:
      return {
        ...state,
        convertedValues: action.payload,
      };

    case types.LOADING_CONVERTED_CURRENCY_LIST:
      return {
        ...state,
        loading: true,
      };

    case types.LOADED_CONVERTED_CURRENCY_LIST:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
