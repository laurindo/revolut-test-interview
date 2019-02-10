import {
  getBalanceSelectOptionsFormatted,
  getCurrentBalanceCurrency,
  getCurrentBalance,
  calculateBalanceTotal,
  getDefaultBalanceCurrencyConversion,
} from '../BalanceUtils';

describe('BALANCE UTILS', () => {
  const balances = [{
    currency: 'USD',
    value: 99,
  }, {
    currency: 'EUR',
    value: 23,
  }];

  const action = {
    payload: {
      currentBalance: {
        currency: 'USD',
      }
    },
  };

  test('should return a balance - getBalanceSelectOptionsFormatted()', () => {
    const result = getBalanceSelectOptionsFormatted(balances, action);
    expect(result[0].value).toBe(99);
  });

  test('should return a empty array - getBalanceSelectOptionsFormatted()', () => {
    const result = getBalanceSelectOptionsFormatted(null, action);
    expect(result.length).toBe(0);
  });

  test('should return a currency name - getCurrentBalanceCurrency()', () => {
    let result = getCurrentBalanceCurrency(balances, 0);
    expect(result).toBe('USD');

    result = getCurrentBalanceCurrency(balances, 1);
    expect(result).toBe('EUR');

    result = getCurrentBalanceCurrency(null, 1);
    expect(result).toBe('USD');
  });

  test('should return an array of balance - getCurrentBalance()', () => {
    let result = getCurrentBalance();
    expect(result).toBe(null);

    result = getCurrentBalance(balances);
    expect(result).toBe(undefined);

    result = getCurrentBalance(balances, 0);
    expect(typeof result).toBe('object');
    expect(result.currency).toBe('USD');
    expect(result.value).toBe(99);
  });

  test('should return my balance formatted - calculateBalanceTotal()', () => {
    let result = calculateBalanceTotal();
    expect(result).toBe('0.00');

    result = calculateBalanceTotal('12', 1.2);
    expect(result).toBe('14.40');

    result = calculateBalanceTotal('12', '1.2');
    expect(result).toBe('14.40');

    result = calculateBalanceTotal('0', '1.2');
    expect(result).toBe('0.00');

    result = calculateBalanceTotal([], []);
    expect(result).toBe('0.00');

    result = calculateBalanceTotal(false, false);
    expect(result).toBe('0.00');

    result = calculateBalanceTotal(true, true);
    expect(result).toBe('0.00');
  });

  test('should return the correct result - getDefaultBalanceCurrencyConversion()', () => {
    const balances = [{"currency":"USD","value":90.08,"symbol":"$","label":"USD"},{"currency":"GBP","value":290.08,"symbol":"£","label":"GBP"},{"currency":"EUR","value":190.08,"symbol":"€","label":"EUR"}];
    const quotations = [{"currency":"USD/EUR","value":"0.88317","date":"2019-02-10 20:30:18","type":"reversed"},{"currency":"USD/GBP","value":"0.77316","date":"2019-02-10 20:30:18","type":"reversed"},{"currency":"USD/BRL","value":"3.73175","date":"2019-02-10 20:30:18","type":"original"}];
    const result = getDefaultBalanceCurrencyConversion(balances, quotations);

    expect(result.currency).toBe('EUR');
    expect(result.value).toBe(190.08);
    expect(result.symbol).toBe('€');
    expect(result.label).toBe('EUR');
  });
});
