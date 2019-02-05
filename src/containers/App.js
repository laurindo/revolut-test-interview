import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';

import Converter from './Converter';
import * as reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagas.registerWithMiddleware(sagaMiddleware);

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Converter />
        </Provider>
      </div>
    );
  }
}
