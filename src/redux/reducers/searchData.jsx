import { ADD_DATA, CLEAN_DATA, LOAD } from '../actions';

const INITIAL = {
  isLoading: false,
  data: {},
};

export default function searchData(state = INITIAL, action) {
  switch (action.type) {
    case LOAD:
      return { ...state, isLoading: action.status };
    case ADD_DATA:
      return { ...state, data: action.data, isLoading: false };
    case CLEAN_DATA:
      return { ...state, data: {} };
    default:
      return state;
  }
}
