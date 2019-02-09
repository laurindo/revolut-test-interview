import {
  getSpecificQuotation,
  getValueFromQuotation,
} from '../QuotationUtils';

describe('QUOTATION UTILS', () => {
  const quotations = [{
      "currency":"USD/EUR",
      "value":"0.88317",
      "date":"2019-02-09 05:30:04",
      "type":"reversed"
  }, {
      "currency":"USD/USD",
      "error":"No data is available"
  }, {
      "currency":"USD/GBP",
      "value":"0.77316",
      "date":"2019-02-09 05:30:04",
      "type":"reversed"
  }, {
      "currency":"USD/BRL",
      "value":"3.73175",
      "date":"2019-02-09 05:30:04",
      "type":"original"
  }];

  test('should return an array filtered of quotation - getSpecificQuotation()', () => {
    let result = getSpecificQuotation();
    expect(result.length).toBe(0);

    result = getSpecificQuotation(null, null, quotations);
    expect(result.length).toBe(0);

    result = getSpecificQuotation('USD', '', quotations);
    expect(result.length).toBe(0);

    result = getSpecificQuotation('USD', 'EUR', quotations);
    expect(result.length).toBe(1);
    expect(result[0].currency).toBe('USD/EUR');
    expect(result[0].value).toBe('0.88317');
  });

  test('should return the value of quotation - getValueFromQuotation()', () => {
    let result = getValueFromQuotation();
    expect(result).toBe('0');

    result = getValueFromQuotation('USD', null, quotations);
    expect(result).toBe('0');

    result = getValueFromQuotation('USD', 'BRL', quotations);
    expect(result).toBe('3.73175');
  });
});
