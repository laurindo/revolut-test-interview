import * as currencySagas from './currency-sagas';
import * as quotationSagas from './quotation-sagas';

const sagas = {
  ...currencySagas,
  ...quotationSagas,
};

function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}

export default {
  registerWithMiddleware,
};
