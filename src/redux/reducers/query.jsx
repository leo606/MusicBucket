import { ADD_QUERY } from '../actions';

const INITIAL = {
  query: '',
};

export default function artist(state = INITIAL, action) {
  switch (action.type) {
    case ADD_QUERY:
      return { query: action.query };
    default:
      return state;
  }
}
