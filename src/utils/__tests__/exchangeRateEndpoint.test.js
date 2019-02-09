import {
  getConvertedCurrencyList,
  getErrorConvertedCurrencyList,
  getQuotations,
  getErrorQuotations,
} from '../__mocks__/request';

describe('EXCHANGE RATE ENDPOINT', () => {
  test('should return success to try request the currencies based on the USD currency', async (done) => {
    const result = await getConvertedCurrencyList('USD').catch(error => error);
    expect(result.status).toBe(true);
    expect(result.currency.length).toBe(4);
    done();
  });

  test('should return an error to try get currencies based on the USD currency', async (done) => {
    const result = await getErrorConvertedCurrencyList('').catch(error => error);
    expect(result.status).toBe(false);
    expect(result.currency.length).toBe(0);
    done();
  });

  test('should return success to try request the currencies based on the BRL currency', async (done) => {
    const result = await getConvertedCurrencyList('BRL').catch(error => error);
    expect(result.status).toBe(true);
    expect(result.currency.length).toBe(4);
    done();
  });

  test('should return an error to try get currencies based on the BRL currency', async (done) => {
    const result = await getErrorConvertedCurrencyList('BRL').catch(error => error);
    expect(result.status).toBe(false);
    expect(result.currency.length).toBe(0);
    done();
  });

  test('should return the quotations rate', async (done) => {
    const result = await getQuotations();
    expect(typeof result.rates).toBe('object');
    expect(result.rates.BRL).toBe(3.729275);
    expect(result.rates.GBP).toBe(0.77256);
    expect(result.rates.EUR).toBe(0.882807);
    done();
  });

  test('should return the quotations rate', async (done) => {
    const result = await getErrorQuotations().catch(error => error);
    expect(typeof result.rates).toBe('object');
    expect(result.rates.BRL).toBe(undefined);
    expect(result.rates.GBP).toBe(undefined);
    expect(result.rates.EUR).toBe(undefined);
    done();
  });
});
