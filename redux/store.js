import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/counter';
import { userReducer } from './reducers/user';

const middleware = applyMiddleware(thunkMiddleware, logger);
const rootReducer = combineReducers({ counter: reducer, user: userReducer });

export function initializeStore() {
    return createStore(rootReducer, composeWithDevTools(middleware));
}
