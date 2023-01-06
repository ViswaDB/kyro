import {combineReducers} from 'redux';

import {rootstackReducer} from './rootstackReducer';

const reducers = combineReducers({
  rootstackReducer: rootstackReducer,
});

export default reducers;
