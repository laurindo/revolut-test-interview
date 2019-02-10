import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/ActionTypes';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';

// Getting quotation values
export function* callGetQuotationSaga(action) {
  const result = yield call(ExhangeRateEndpointService.getQuotation);
  yield put({ type: actionTypes.SUCCESS_QUOTATION, payload: result.data.rates });
}

function* getQuotationSaga(a) {
  yield takeLatest(actionTypes.REQUEST_QUOTATION, callGetQuotationSaga, a);
}

export default getQuotationSaga;
