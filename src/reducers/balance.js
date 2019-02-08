import * as types from '../constants/ActionTypes';

const balances = [{
  currency: 'USD',
  value: 90.08,
  symbol: '$',
}, {
  currency: 'GBP',
  value: 290.08,
  symbol: '£',
}, {
  currency: 'EUR',
  value: 190.08,
  symbol: '€',
}];

const initialState = {
  balances,
  currentBalance: balances[0],
  currentQuotation: 0,
};

console.log(initialState.currentBalance);

export default function balance(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_QUOTATION:
      return {
        ...state,
        currentQuotation: action.payload,
      };

    case types.SELECT_CURRENCY:
      return {
        ...state,
        currentBalance: action.payload,
      };

    default:
      return state;
  }
}
