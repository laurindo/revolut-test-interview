import { formatValueToCurrency, isNumber, showValueFormatted } from './GeneralUtils';
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
    return '0.00';
  } catch (error) {
    return '0.00';
  }
};

export const formatCurrenciesToGrid = (convertedValues, currentBalance) => {
  return convertedValues.map(currency => {
    const total = calculateBalanceTotal(currentBalance.value, currency.value);
    const value = showValueFormatted(parseFloat(currency.value));
    return [currency.currency, `${currentBalance.symbol} ${value}`, `${currentBalance.symbol} ${total}`];
  });
};

export const getDefaultBalanceCurrencyConversion = (balances, quotations = []) => {
  return balances.filter(balance => {
    return balance.currency === quotations[0].currency.substr(4,3);
  })[0];
};
