import * as currencySagas from './currency-sagas';

const sagas = {
  ...currencySagas,
};

function registerWithMiddleware(middleware) {
  for (let name in sagas) {
    middleware.run(sagas[name]);
  }
}

export default {
  registerWithMiddleware,
};
