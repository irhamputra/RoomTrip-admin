import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { user } from './reducers/user';

const middleware = applyMiddleware(thunkMiddleware, logger);
const rootReducer = combineReducers({ user });

export function initializeStore(initState = {}) {
    return createStore(rootReducer, initState, composeWithDevTools(middleware));
}
