import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchData from './searchData';
import artist from './artist';
import theme from './theme';

const rootReducer = combineReducers({
  searchQuery,
  searchData,
  theme,
  artist,
});

export default rootReducer;
