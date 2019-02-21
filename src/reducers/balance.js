import { showValueFormatted } from '../utils/GeneralUtils';
import * as types from '../constants/ActionTypes';
import MockPockets from '../constants/MockPockets';
import {
  processTransactionExchange,
} from '../utils/BalanceUtils';

const initialState = {
  balances: MockPockets,
  currentBalance: MockPockets[0],
  currentQuotation: 0,
  temporaryBalance: MockPockets[0],
};

export default function balance(state = initialState, action) {
  switch (action.type) {
    case types.RESET_TEMPORARY_BALANCE:
      const currentCurrency = state.balances.filter(balance => {
        return state.currentBalance.currency === balance.currency;
      });
      return {
        ...state,
        temporaryBalance: currentCurrency[0],
      };

    case types.CHANGE_TEMPORARY_BALANCE:
      const currentBalanceValue = state.currentBalance.value;
      const valuePayload = action.payload || 0;
      const result = currentBalanceValue - valuePayload;
      return {
        ...state,
        temporaryBalance: {
          ...state.temporaryBalance,
          value: showValueFormatted(result),
        },
      };

    case types.PROCESS_TRANSACTION_EXCHANGE:
      return {
        ...state,
        balances: processTransactionExchange(action.payload),
        currentBalance: state.temporaryBalance,
        temporaryBalance: {
          ...state.temporaryBalance,
          value: parseFloat(state.temporaryBalance.value)
        },
      };

    case types.SUCCESS_QUOTATION:
      return {
        ...state,
        currentQuotation: action.payload,
      };

    case types.SELECT_CURRENCY:
      return {
        ...state,
        currentBalance: action.payload,
        temporaryBalance: action.payload,
      };

    case types.CHANGE_BALANCE:
      return {
        ...state,
        currentBalance: action.payload,
        temporaryBalance: action.payload,
      };

    default:
      return state;
  }
}
