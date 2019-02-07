import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const reducer = combineReducers(reducers);


sagas.registerWithMiddleware(sagaMiddleware);

export default function configureStore() {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  return store;
}
