import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import { loginReducer } from '../reducers/reducers';

const middleWare = applyMiddleware(logger);

export const store = createStore(loginReducer, middleWare);