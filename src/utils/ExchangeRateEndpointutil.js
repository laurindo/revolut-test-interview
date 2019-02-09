import axios from 'axios';

const API_ID = 'ac12a3f536f347db9a29194a5eee8e9c';

export default class ExchangeRateEndpointUtil {
  static getConvertedCurrencyList(currency = 'USD') {
    return axios({
      method: 'get',
      url: `https://currencydatafeed.com/api/data.php?token=k91o1hxqymhjvj1xdsn7&currency=${currency}/EUR+${currency}/USD+${currency}/GBP+${currency}/BRL`,
    });
  }

  static getQuotation(params = { symbol: 'USD' }) {
    return axios({
      method: 'get',
      url: `https://openexchangerates.org/api/latest.json?app_id=${API_ID}&symbols=GBP,EUR,CAD,AUD,USD,BRL,BTC`,
    });
  }

  /**
   * Method responsible to convert the the current coin to the selected coin
   * @param {number} value            - positive number
   * @param {string} currentCurrency  - currency that is going be used to calculate the number
   * @param {string} targetCurrency   - currency target that is going be converted
   * @example
   * {
      "disclaimer": "https://openexchangerates.org/terms/",
      "license": "https://openexchangerates.org/license/",
      "request": {
          "query": "/convert/19999.95/GBP/EUR",
          "amount": 19999.95,
          "from": "GBP",
          "to": "EUR"
      },
      "meta": {
          "timestamp": 1449885661,
          "rate": 1.383702
      },
      "response": 27673.975864
    }
   */
  static convert(value, currentCurrency = 'GBP', targetCurrency = 'EUR') {
    return axios({
      method: 'get',
      url: `https://openexchangerates.org/api/convert/${value}/${currentCurrency}/${targetCurrency}?app_id=${API_ID}`,
    });
  }

  /**
   * Method responsible to get all the currencies names
   * @example
   *  {
        "AED": "United Arab Emirates Dirham",
        "AFN": "Afghan Afghani",
        "ALL": "Albanian Lek",
        ...
      }
   */
  static getCurrencies() {
    return axios({
      method: 'get',
      url: 'https://openexchangerates.org/api/currencies.json',
    });
  }

  /**
   * Method responsible to get the specific currency with your rates
   * @param {string} baseSymbol - Symbol the represents a currency coin - CAD, USD, GBP, ...
   * @example
   * {
        disclaimer: "https://openexchangerates.org/terms/",
        license: "https://openexchangerates.org/license/",
        timestamp: 1424127600,
        base: "CAD",
        rates: {
          AUD: 1.032828,
          EUR: 0.706867,
          GBP: 0.522328,
        }
      }
   */
  static getSpecificCurrency(baseSymbol = 'USD') {
    return axios({
      method: 'get',
      url: `https://openexchangerates.org/api/currencies.json?base=${baseSymbol.toUpperCase()}`,
    });
  }
}
