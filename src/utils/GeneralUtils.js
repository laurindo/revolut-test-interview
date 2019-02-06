export const getUID = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

export const getSelectOptionsFormatted = (response = {}) => {
  return Object.keys(response).map(keyName => {
    return { value: response[keyName], label: keyName };
  });
};

export const formatValueToCurrency = (currency = 'USD', digits = 2) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: digits
  });
  return {
    format: (value) => {
      return formatter.format(value);
    },
  };
};
