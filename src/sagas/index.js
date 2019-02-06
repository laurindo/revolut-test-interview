import * as currencySagas from './currency-sagas';
import * as quotationSagas from './quotation-sagas';
import * as currencyConvertedSagas from './currency-converted-sagas';

const sagas = {
  ...currencySagas,
  ...quotationSagas,
  ...currencyConvertedSagas,
};

function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}

export default {
  registerWithMiddleware,
};
