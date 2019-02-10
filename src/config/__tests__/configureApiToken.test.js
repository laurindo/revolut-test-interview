import TOKEN from '../configureAPIToken';

describe('CONFIGURE API TOKEN', () => {
  test('should return the string with api token - EXCHANGE RATES', () => {
    const result = TOKEN.TOKEN_EXCHANGE_RATES;
    expect(typeof result).toBe('string');
  });

  test('should return the string with api token - CURRENCY DATA FEED', () => {
    const result = TOKEN.TOKEN_CURRENCY_DATA_FEED;
    expect(typeof result).toBe('string');
  });
});
