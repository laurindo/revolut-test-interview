import { select, put, call, take } from 'redux-saga/effects';
import * as actionTypes from '../../constants/ActionTypes';
import getQuotationSaga, { callGetQuotationSaga } from '../quotation-sagas';

describe('SAGAS', () => {
  //let gen = null;

  beforeAll(() => {
    //gen = getQuotationSaga();
  });

  test('should get quotations', () => {
    const gen = callGetQuotationSaga({});
    //console.log(gen.next());
  });
});
