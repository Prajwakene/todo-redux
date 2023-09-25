//single store for all

// const redux =require("redux")
import redux from 'redux';

import { todoReducers } from './reducers/todoReducer';

export const store = redux.createStore(todoReducers) ;

