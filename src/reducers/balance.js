import * as types from '../constants/ActionTypes';

const initialState = {
  balance: {
    GBP: {
      symbol: '£',
      value: 290.98
    },
    EUR: {
      symbol: '€',
      value: 200,
    },
    USD: {
      symbol: '$',
      value: 45.78,
    }
  },
};

export default function balance(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_BALANCE:
      return {
        ...state,
        balance: {
          ...state.balance,
          [action.payload.symbol]: {
            symbol: action.payload.symbol,
            value: action.payload.value,
          },
        },
      };

    default:
      return state;
  }
}
