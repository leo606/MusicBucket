import { ADD_DATA, CLEAN_DATA } from '../actions';

const INITIAL = {
  data: {},
};

export default function data(state = INITIAL, action) {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: action.data };
    case CLEAN_DATA:
      return { ...state, data: {} };
    default:
      return state;
  }
}
