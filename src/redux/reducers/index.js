import { combineReducers } from 'redux';
import artist from './artist';
import query from './query';
import data from './data';

const rootReducer = combineReducers({ artist, query, data });

export default rootReducer;
