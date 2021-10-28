import {
  ADD_SEARCH_DATA,
  CLEAN_SEARCH_DATA,
  LOAD_SEARCH,
} from '../actions';

const INITIAL = {
  isLoading: false,
};

export default function searchData(state = INITIAL, action) {
  switch (action.type) {
    case ADD_SEARCH_DATA:
      return { isLoading: false, ...action.data };
    case LOAD_SEARCH:
      return { ...state, isLoading: action.status };
    case CLEAN_SEARCH_DATA:
      return { ...INITIAL };
    default:
      return state;
  }
}
