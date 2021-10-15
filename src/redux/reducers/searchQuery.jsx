import { ADD_QUERY } from '../actions';

const INITIAL = {
  text: undefined,
  entitie: undefined,
};

export default function searchQuery(state = INITIAL, action) {
  switch (action.type) {
    case ADD_QUERY:
      return { ...state, text: action.text, entitie: action.entitie };
    default:
      return state;
  }
}
