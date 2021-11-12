import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { feedReducer, loginReducer, userInfoReducer, NPCReducer, toggleThemeReducer, NCCReducer } from '../reducers/reducers';

const middleWare = applyMiddleware(logger, thunk);

const rootReducer = combineReducers(
    {
        login: loginReducer,
        feed: feedReducer,
        userInfo: userInfoReducer,
        npc: NPCReducer,
        theme: toggleThemeReducer,
        ncc: NCCReducer,
    });

export const store = createStore(rootReducer, middleWare);