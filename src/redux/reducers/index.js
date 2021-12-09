import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import searchData from './searchData';
import artist from './artist';
import releaseGroup from './releaseGroup';
import release from './release';
import theme from './theme';

const rootReducer = combineReducers({
  searchQuery,
  searchData,
  theme,
  artist,
  releaseGroup,
  release,
});

export default rootReducer;
