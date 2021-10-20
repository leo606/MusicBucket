import { ADD_SEARCH_DATA, CLEAN_DATA, LOAD_SEARCH } from '../actions';

const INITIAL = {
  isLoading: false,
  data: {},
};

export default function searchData(state = INITIAL, action) {
  switch (action.type) {
    case ADD_SEARCH_DATA:
      return { ...state, data: action.data, isLoading: false };
    case LOAD_SEARCH:
      return { ...state, isLoading: action.status };
    case CLEAN_DATA:
      return { ...state, data: {} };
    default:
      return state;
  }
}
