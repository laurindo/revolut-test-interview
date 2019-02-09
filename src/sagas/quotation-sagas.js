import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/ActionTypes';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';
import { formatValueToCurrency } from '../utils/GeneralUtils';

// Getting quotation values
export function* callGetQuotationSaga(action) {
  const result = yield call(ExhangeRateEndpointService.getQuotation, action.payload);
  console.log("===================================");
  console.log(result);
  console.log("===================================");
  const currentValue = result.data.rates[action.payload.currency];
  const valueFormatted = formatValueToCurrency().format(currentValue);
  yield put({ type: actionTypes.SUCCESS_QUOTATION, payload: valueFormatted });
}

function* getQuotationSaga() {
  yield takeLatest(actionTypes.REQUEST_QUOTATION, callGetQuotationSaga);
}

export default getQuotationSaga;
