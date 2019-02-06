import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/ActionTypes';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';

// Getting currency names
function* callGetCurrencyConvertedSaga(action) {
  const result = yield call(ExhangeRateEndpointService.getConvertedCurrencyList, action.payload);
  yield put({ type: actionTypes.SUCCESS_CURRENCY_CONVERTED, payload: result.data.currency });
}

function* getCurrencyConvertedSaga() {
  yield takeLatest(actionTypes.REQUEST_CURRENCY_CONVERTED, callGetCurrencyConvertedSaga);
}

export default getCurrencyConvertedSaga;
