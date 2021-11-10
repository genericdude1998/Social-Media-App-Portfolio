import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { feedReducer, loginReducer, userInfoReducer } from '../reducers/reducers';

const middleWare = applyMiddleware(logger, thunk);

const rootReducer = combineReducers({login: loginReducer,feed: feedReducer, userInfo: userInfoReducer});

export const store = createStore(rootReducer, middleWare);