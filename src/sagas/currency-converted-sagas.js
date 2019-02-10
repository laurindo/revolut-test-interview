import { takeLatest, call, put } from 'redux-saga/effects';
import * as actionTypes from '../constants/ActionTypes';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';

// Getting currency names
function* callGetCurrencyConvertedSaga(action) {
  yield put({ type: actionTypes.LOADING_CONVERTED_CURRENCY_LIST });
  const result = yield call(ExhangeRateEndpointService.getConvertedCurrencyList, action.payload);
  yield put({ type: actionTypes.SUCCESS_CURRENCY_CONVERTED, payload: result.data.currency });
  yield put({ type: actionTypes.LOADED_CONVERTED_CURRENCY_LIST });
}

function* getCurrencyConvertedSaga() {
  yield takeLatest(actionTypes.REQUEST_CURRENCY_CONVERTED, callGetCurrencyConvertedSaga);
}

export default getCurrencyConvertedSaga;
