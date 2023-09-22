//single store for all

import redux from 'redux';

import { todoReducers } from './reducers/todoReducer';

export const store = redux.createStore(todoReducers) 