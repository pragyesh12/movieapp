import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';
const moiveSagaMiddleware = createSagaMiddleware();
import logger from 'redux-logger';
export const store = createStore(
  rootReducer,
  applyMiddleware(moiveSagaMiddleware, logger),
);
moiveSagaMiddleware.run(rootSaga);
