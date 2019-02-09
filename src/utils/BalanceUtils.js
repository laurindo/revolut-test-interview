import { formatValueToCurrency, isNumber } from './GeneralUtils';
import { getValueFromQuotation } from './QuotationUtils';

export const getBalanceSelectOptionsFormatted = (balances = [], action) => {
  try {
    return balances.map(balance => {
      const currencySelected = action.payload.currentBalance.currency;
      const quotations = action.payload.quotations;
      return {
        label: balance.currency,
        value: balance.value,
        quotation: getValueFromQuotation(currencySelected, balance.currency, quotations),
      };
    });
  } catch (error) {
    return [];
  }
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

export const calculateBalanceTotal = (currentBalance = 0, unitValue = 0) => {
  try {
    const _currentBalance = parseFloat(currentBalance);
    const _unitValue = parseFloat(unitValue);

    if (isNumber(_currentBalance) && isNumber(_unitValue)) {
      const Formatter = formatValueToCurrency();
      return Formatter.format(_currentBalance * _unitValue);
    }
    return '$0.00';
  } catch (error) {
    return '$0.00';
  }
};
