import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from '../reducers';
import sagas from '../sagas';

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();

  const reducer = combineReducers(reducers);
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagas.registerWithMiddleware(sagaMiddleware);

  return store;
}
