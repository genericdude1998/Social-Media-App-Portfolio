import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/reducers';

const middleWare = applyMiddleware(logger, thunk);

export const store = createStore(loginReducer, middleWare);