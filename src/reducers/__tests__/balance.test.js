import * as types from '../../constants/ActionTypes';
import MockPockets from '../../constants/MockPockets';
import balanceReducer from '../balance';

describe('Balance Reducer', () => {
  test('should perform reducer correctly', () => {
    const expected = {
      balances: MockPockets,
      currentBalance: MockPockets[0],
      currentQuotation: 0,
    };

    let result = balanceReducer(undefined, {});
    expect(result).toEqual(expected);

    result = balanceReducer(undefined, { type: types.SUCCESS_QUOTATION, payload: 1 });
    expect(result.currentQuotation).toEqual(1);

    result = balanceReducer(undefined, { type: types.SELECT_CURRENCY, payload: { value: 34.59 } });
    expect(result.currentBalance.value).toEqual(34.59);

    result = balanceReducer(undefined, { type: types.CHANGE_BALANCE, payload: { balance: 100 } });
    expect(result.currentBalance.balance).toEqual(100);
  });
});
