import { ADD_QUERY } from '../actions';

const INITIAL = {
  query: '',
};

export default function query(state = INITIAL, action) {
  switch (action.type) {
    case ADD_QUERY:
      return { query: action.query, entitie: action.entitie };
    default:
      return state;
  }
}
