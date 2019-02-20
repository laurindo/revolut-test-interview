export const getObjectExchangeList = (values) => {
  return {
    to: values.selectedCurrencyConversion.currency,
    from: values.selectedCurrency.currency,
    debt: `- ${values.selectedCurrency.symbol} ${values.valueSelected}`,
    credit: `+ ${values.selectedCurrencyConversion.symbol} ${values.valueConverted}`,
    dateTime: new Date().toISOString(),
    hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
  };
};
