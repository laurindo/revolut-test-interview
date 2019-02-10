import * as types from '../constants/ActionTypes';
import MockPockets from '../constants/MockPockets';

const initialState = {
  balances: MockPockets,
  currentBalance: MockPockets[0],
  currentQuotation: 0,
};

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
        currentBalance: {
          ...state.currentBalance,
          ...action.payload,
        },
      };

    case types.CHANGE_BALANCE:
      return {
        ...state,
        currentBalance: action.payload,
      };

    default:
      return state;
  }
}
