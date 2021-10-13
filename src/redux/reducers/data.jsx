import { ADD_DATA } from '../actions';

const INITIAL = {
  data: undefined,
};

export default function data(state = INITIAL, action) {
  switch (action.type) {
    case ADD_DATA:
      return { data: action.data };
    default:
      return state;
  }
}
