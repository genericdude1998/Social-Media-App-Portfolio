import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { feedReducer, loginReducer, userInfoReducer, NPCReducer, toggleThemeReducer, NCCReducer } from '../reducers/reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
}


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
    
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, middleWare);

export const persistor = persistStore(store); 