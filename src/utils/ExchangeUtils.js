export const getObjectExchangeList = (values) => {
  const currentDate = new Date();
  return {
    to: values.selectedCurrencyConversion.currency,
    from: values.selectedCurrency.currency,
    debt: `- ${values.selectedCurrency.symbol} ${values.valueSelected}`,
    credit: `+ ${values.selectedCurrencyConversion.symbol} ${values.valueConverted}`,
    dateTime: `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`,
  };
};
