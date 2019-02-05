import { takeEvery } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions/CurrencyActions';
import * as actionTypes from '../constants/ActionTypes';
import ExhangeRateEndpointService from '../utils/ExchangeRateEndpointutil';
import { getSelectOptionsFormatted } from '../utils/GeneralUtils';

// Getting currency names
function* callGetCurrencyNamesSaga() {
  const result = yield call(ExhangeRateEndpointService.getCurrencies);
  const formatted = getSelectOptionsFormatted(result.data);
  yield put({ type: actionTypes.SUCCESS_CURRENCY_NAMES, payload: formatted });
}

function* getCurrencyNamesSaga() {
  yield takeLatest(actionTypes.REQUEST_CURRENCY_NAMES, callGetCurrencyNamesSaga);
}

export default getCurrencyNamesSaga;
