import { formatValueToCurrency } from './GeneralUtils';
import { getValueFromQuotation } from './QuotationUtils';

export const getBalanceSelectOptionsFormatted = (balances, action) => {
  return balances.map(balance => {
    const currencySelected = action.payload.currentBalance.currency;
    const quotations = action.payload.quotations;
    return {
      label: balance.currency,
      value: balance.value,
      quotation: getValueFromQuotation(currencySelected, balance.currency, quotations),
    };
  })
};

export const getCurrentBalanceCurrency = (balances, selectedCurrency) => {
  try {
    return balances[selectedCurrency].currency;
  } catch (error) {
    return 'USD';
  }
};

export const getCurrentBalance = (balances, selectedCurrency) => {
  try {
    return balances[selectedCurrency];
  } catch (error) {
    return null;
  }
};

export const calculateBalanceTotal = (currentBalance, unitValue) => {
  const Formatter = formatValueToCurrency();
  return Formatter.format(parseFloat(currentBalance) * parseFloat(unitValue));
};
