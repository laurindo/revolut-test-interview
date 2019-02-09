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

export const validateCurrencyNumber = (value = '') => {
  let valueFormatted = "";
  const MINUS = '-';
  for (var x = 0; x < value.length; x++) {
    if (value[x].match(/^[-0-9.]+$/)) {
      if (value[x] === MINUS && x === 0) {
        valueFormatted += value[x];
      } else if (value[x] === MINUS && x > 0) {
        continue;
      } else {
        valueFormatted += value[x];
      }
    }
  }
  return valueFormatted;
};

export const convertNumber = (value = 0, quotation = 0) => {
  if (isNumber(value)) {
    const numberCalculated = parseFloat(value) * quotation;
    return showValueFormatted(numberCalculated);
  }
  return 0;
};

export const showValueFormatted = (value = 0, digits = 2) => {
  return value.toFixed(digits);
};

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

export const keepNumberPositive = (value = 0) => {
  return Math.abs(value);
};
