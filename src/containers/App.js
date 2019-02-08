import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import Logo from '../components/Logo';
import BalanceSliderContainer from './BalanceSliderContainer';
import ConvertedCurrencyContainer from './ConvertedCurrencyContainer';

import ContainerAnimated from '../components/ContainerAnimated';
import * as reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagas.registerWithMiddleware(sagaMiddleware);

export default class App extends Component {
  render() {
    return (
      <div className="index-page">
        <Provider store={store}>
          <ContainerAnimated>
            <Logo width='20%' height='20%' />
            <BalanceSliderContainer title="Balances" />
            <ConvertedCurrencyContainer />
          </ContainerAnimated>
        </Provider>
      </div>
    );
  }
}
