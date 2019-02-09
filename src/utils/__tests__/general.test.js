import {
  getUID,
  getSelectOptionsFormatted,
  formatValueToCurrency,
  validateCurrencyNumber,
  convertNumber,
  showValueFormatted,
  isNumber,
  keepNumberPositive,
} from '../GeneralUtils';

describe('GENERAL UTILS', () => {
  test('should UUID randomly - getUID()', () => {
    let result = getUID();
    expect(typeof result).toBe('string');
  });

  test('should return an array of object with label and value - getSelectOptionsFormatted()', () => {
    const quotationsObj = {
      USD: 3.66,
      EUR: 3.77
    };

    let result = getSelectOptionsFormatted();
    expect(typeof result).toBe('object');

    result = getSelectOptionsFormatted(quotationsObj);
    expect(result.length).toBe(2);
    expect(result[0].label).toBe('USD');
    expect(result[0].value).toBe(3.66);

    expect(result[1].label).toBe('EUR');
    expect(result[1].value).toBe(3.77);
  });

  test('should format a value with symbol and value - formatValueToCurrency()', () => {
    let formatter = formatValueToCurrency();
    expect(typeof formatter).toBe('object');

    let result = formatter.format();
    expect(result).toBe('$ 0.00');

    formatter = formatValueToCurrency('BRL', 2, 'pt-BR');
    result = formatter.format('45');
    expect(result.indexOf('R$')).toBe(0);
    expect(result.indexOf('45')).toBe(3);
  });

  test('should return a valid currency - validateCurrencyNumber()', () => {
    let result = validateCurrencyNumber();
    expect(result).toBe('');

    result = validateCurrencyNumber('-12.908');
    expect(result).toBe('-12.908');

    result = validateCurrencyNumber('-12abc.908');
    expect(result).toBe('-12.908');

    result = validateCurrencyNumber('-12abc.908-');
    expect(result).toBe('-12.908');

    result = validateCurrencyNumber('abcd');
    expect(result).toBe('');

    result = validateCurrencyNumber('1.234,99');
    expect(result).toBe('1.23499');
  });

  test('should convert number based on quotation - convertNumber()', () => {
    let result = convertNumber();
    expect(result).toBe('0.00');

    result = convertNumber(2, 1.34);
    expect(result).toBe('2.68');

    result = convertNumber([], []);
    expect(result).toBe('0.00');
  });

  test('should convert the last digits to two - showValueFormatted()', () => {
    let result = showValueFormatted();
    expect(result).toBe('0.00');

    result = showValueFormatted(2.3456767);
    expect(result).toBe('2.35');

    result = showValueFormatted(2.3456767, 3);
    expect(result).toBe('2.346');
  });

  test('should verify if the number is a valid number - isNumber()', () => {
    let result = isNumber();
    expect(result).toBe(false);

    result = isNumber(true);
    expect(result).toBe(false);

    result = isNumber(123);
    expect(result).toBe(true);

    result = isNumber('abc123');
    expect(result).toBe(false);

    result = isNumber(1.2345);
    expect(result).toBe(true);

    result = isNumber(-1.2345);
    expect(result).toBe(true);

    result = isNumber([]);
    expect(result).toBe(false);

    result = isNumber(NaN);
    expect(result).toBe(false);
  });

  test('should always return a positive number - keepNumberPositive()', () => {
    let result = keepNumberPositive();
    expect(result).toBe(0);

    result = keepNumberPositive(-1);
    expect(result).toBe(1);

    result = keepNumberPositive(1);
    expect(result).toBe(1);

    result = keepNumberPositive(null);
    expect(result).toBe(0);

    result = keepNumberPositive(NaN);
    expect(result).toBe(0);
  });
});
