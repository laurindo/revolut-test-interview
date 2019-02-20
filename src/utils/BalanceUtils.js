import { formatValueToCurrency, isNumber, showValueFormatted, toNumber } from './GeneralUtils';
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

export const getValuesToIncreaseTransaction = (objectTransaction) => {
  return {
    currencies: objectTransaction.currencies,
    balances: objectTransaction.balances,
    selectedCurrency: objectTransaction.selectedCurrency,
    valueSelected: objectTransaction.valueSelected,
    valueConverted: objectTransaction.valueConverted,
    selectedCurrencyConversion: objectTransaction.selectedCurrencyConversion,
  };
};

export const processTransactionExchange = (values) => {
  const balanceIncreased = processTransactionToIncreaseExchangeTo(values);
  const lastTransaction = processTransactionToDecreaseExchangeFrom(values, balanceIncreased);
  return lastTransaction;
};

export const processTransactionToIncreaseExchangeTo = (values) => {
  return values.balances.map(balance => {
    if (balance.currency === values.selectedCurrencyConversion.currency) {
      const valueConverted = toNumber(values.valueConverted);
      const balanceValue = toNumber(balance.value);
      return {
        ...balance,
        value: (valueConverted + balanceValue).toFixed(2),
      };
    }
    return balance;
  });
};

export const processTransactionToDecreaseExchangeFrom = (values, newBalances) => {
  return newBalances.map(balance => {
    if (balance.currency === values.selectedCurrency.currency) {
      const valueSelected = toNumber(values.valueSelected);
      const balanceValue = toNumber(balance.value);
      return {
        ...balance,
        value: (balanceValue - valueSelected).toFixed(2),
      };
    }
    return balance;
  });
};
