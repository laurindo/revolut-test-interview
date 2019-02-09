/**
 * @params {string} currencySelected  - Column that has the first column selected             - USD
 * @params {string} currencyToConvert - Column that I want using the value to be converted    - GBP
 * @params {array}  quotations        - prices of the day
 * Give the below data:
 * ('USD', 'GBP', [{ currency: 'USD/GBP' }, { currency: 'USD/EUR' }])
 *
 * The result must be:
 * [{ currency: 'USD/GBP' }]
 */
export const getSpecificQuotation = (currencySelected = 'USD', currencyToConvert = '', quotations = []) => {
  return quotations.filter(quotation => {
    return quotation.currency === `${currencySelected}/${currencyToConvert}`;
  });
};

export const getValueFromQuotation = (currencySelected = 'USD', currencyToConvert = '', quotations = []) => {
  try {
    return quotations.find(quotation => {
      return quotation.currency === `${currencySelected}/${currencyToConvert}`;
    }).value;
  } catch (error) {
    return '0';
  }
};
