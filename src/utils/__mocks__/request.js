const currenciesData = {
  USD: {
    status: true, currency: [ { currency: "USD/EUR", value: "0.88317", date: "2019-02-09 16:00:07", type: "reversed" }, { currency: "USD/USD", error: "No data is available" }, { currency: "USD/GBP", value: "0.77316", date: "2019-02-09 16:00:07", type: "reversed" }, { currency: "USD/BRL", value: "3.73175", date: "2019-02-09 16:00:07", type: "original" } ]
  },
  BRL: {
    status: true, currency: [ { currency: "BRL/EUR", value: "0.23664", date: "2019-02-09 16:00:06", type: "reversed" }, { currency: "BRL/USD", value: "0.26797", date: "2019-02-09 16:00:07", type: "reversed" }, { currency: "BRL/GBP", type: "converted", date: "2019-02-09 16:00:07", value: "0.20718" }, { currency: "BRL/BRL", type: "converted", date: "2019-02-09 16:00:07", value: "1" } ]
  }
};

const quotations = { disclaimer: "Usage subject to terms: https://openexchangerates.org/terms", license: "https://openexchangerates.org/license", timestamp: 1549717180, base: "USD", rates: { AUD: 1.410812, BRL: 3.729275, BTC: 0.000275380321, CAD: 1.3277, EUR: 0.882807, GBP: 0.77256, USD: 1 } };

export function getConvertedCurrencyList(currency) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(currenciesData[currency]);
    });
  });
}

export function getErrorConvertedCurrencyList() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      reject({
        status: false,
        currency: [],
      });
    });
  });
}

export function getQuotations() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      resolve(quotations);
    });
  });
}

export function getErrorQuotations() {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      reject({
        rates: {},
      });
    });
  });
}
