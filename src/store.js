import { createStore, applyMiddleware } from 'redux';
import { todoReducer } from './reducers/todo.reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;