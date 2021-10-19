import { combineReducers } from 'redux';
// import artist from './artist';
import searchQuery from './searchQuery';
import searchData from './searchData';
import theme from './theme';

const rootReducer = combineReducers({ searchQuery, searchData, theme });

export default rootReducer;
