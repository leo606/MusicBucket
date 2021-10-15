import { combineReducers } from 'redux';
// import artist from './artist';
import searchQuery from './searchQuery';
import searchData from './searchData';

const rootReducer = combineReducers({ searchQuery, searchData });

export default rootReducer;
