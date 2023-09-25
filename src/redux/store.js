//single store for all

// const redux =require("redux") //we cannot directly import redux we need to import everything 
import * as redux from 'redux';

import { todoReducers } from './reducers/todoReducer';

export const store = redux.createStore(todoReducers) ;


// implementing Selector

