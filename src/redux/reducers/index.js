import { combineReducers } from 'redux';
import artist from './artist';
import query from './query';

const rootReducer = combineReducers({ artist, query });

export default rootReducer;
